import {ActionCreators} from './actions';
import {getOptimizedUrl} from '../../utils';

const adapter = (response) => {
  const keys = Object.keys(response);
  return keys.map((key)=>{
    return {
      id: key,
      ...response[key]
    }
  });
}

export const Operations = {
  fetchLessons: ()=>async(dispatch)=>{
    dispatch(ActionCreators.setLoaded(true));
    try{
      const response = await fetch('/api/lessons/');
      const data = await response.json();

      const scoresResponse = await fetch('/api/scores');
      const dataScores = await scoresResponse.json();      

      //добавляем поле score
      const lessonsWithScores = data.lessons.map((lesson)=>{
        const targetScore = dataScores.scores.find((score)=>score.lessonId===lesson._id).score;
        return {...lesson,
          score: targetScore
        }
      });     

      dispatch(ActionCreators.setLessons(lessonsWithScores));

      //mobile data
      const mobileResponse = await fetch('https://kruti-verti-mobile-default-rtdb.firebaseio.com/lessons.json');
      const mobileData = await mobileResponse.json();
      dispatch(ActionCreators.setMobileLessons(adapter(mobileData)));      
    }
    catch(err){
      console.log(err)
    }
    finally{
      dispatch(ActionCreators.setLoaded(false));
    }
  },

  setLesson: (lesson) => async(dispatch)=>{
    try{
      const response = await fetch('api/lessons/create', {
        method: 'POST',
        body: JSON.stringify({...lesson, 
          booked: false,
          practiceUrl: getOptimizedUrl(lesson.practiceUrl),
          tutorialUrl: getOptimizedUrl(lesson.tutorialUrl),
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }); 
      const newLesson = await response.json();     

      if(response.ok){ //если пришел ответ, дает добро на отрисовку из redux
        const obj = {
          ...lesson,
          _id: Math.random().toString(), //генерит для отрисовки временный id
          practiceUrl: getOptimizedUrl(lesson.practiceUrl),
          tutorialUrl: getOptimizedUrl(lesson.tutorialUrl),
        }
        dispatch(ActionCreators.setLesson(obj));

        //создаем очки для только что созданного урока
        await fetch('api/scores/create', {
          method: 'POST',
          body: JSON.stringify({lessonId: newLesson.lessonId}),
          headers: {
            'Content-Type': 'application/json'
          }
        })        
      }      
    }
    catch(err){
      console.log(err)
    }
  },

  removeLesson: (id) => async (dispatch) => {
    try{
      const response = await fetch(`api/lessons/${id}`, {
        method: 'DELETE',        
      });
      const deletingLesson = await response.json(); 

      if(response.ok){
        dispatch(ActionCreators.removeLesson(id));        

        //удалем очки для только что удаленного урока
        const lessonId = deletingLesson.lessonId;
        await fetch(`api/scores/${lessonId}`, {
          method: 'DELETE',          
          headers: {
            'Content-Type': 'application/json'
          }
        })        
      }
    }
    catch(err){
      console.log(err)
    }
  },

  updateLesson: (id, lesson) => async (dispatch) => {
    try{
      const response = await fetch(`api/lessons/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({...lesson,
          practiceUrl: getOptimizedUrl(lesson.practiceUrl),
          tutorialUrl: getOptimizedUrl(lesson.tutorialUrl),
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });      

      if(response.ok){
        dispatch(ActionCreators.updateLesson(id, lesson));
      }      
    }
    catch(err){
      console.log(err)
    }
  },

  setScore: (id, value) => async(dispatch) => {
    try{      
      await fetch(`/api/scores/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({score: value}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    catch(err){
      console.log(err)
    }
  },
};
