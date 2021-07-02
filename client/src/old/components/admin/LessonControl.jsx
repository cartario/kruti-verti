import React from 'react';
import { useDispatch } from 'react-redux';
import { Operations } from '../../../store/lessons/operations';

const Controls = ({ lesson }) => {
  const initialState = {    
    ...lesson
  };

  const dispatch = useDispatch();
  const [form, setForm] = React.useState(initialState);

  const valid = 
    form.title.length && form.level.toString().length && form.practiceUrl.length && form.tutorialUrl.length;    

  let id;
  lesson._id ? (id = lesson._id) : (id = lesson.id);

  const [modal, setModal] = React.useState(false);

  const handleCloseModal = () => {
    setForm(initialState);
    setModal(false)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Operations.updateLesson(id, form));
    
    setModal(false);    
  };

  const handleDelete = () => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(Operations.removeLesson(id));
    }
  };

  const handleEdit = () => {    
    setModal(true);
  };

  return (
    <div className="admin__lesson-controls">
      <svg
        onClick={handleDelete}
        className="admin__lesson-controls--delete"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
          fill="#f44336"
        />
        <path
          d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
          fill="#fafafa"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 477.873 477.873"
        className="admin__lesson-controls--edit"
        onClick={handleEdit}
      >
        <g>
          <g>
            <path d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2    c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067    S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2    c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937    c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585    c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13    l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z M434.603,87.419L212.736,309.286l-66.287,22.135l22.067-66.202    L390.468,43.353c12.202-12.178,31.967-12.158,44.145,0.044c5.817,5.829,9.095,13.72,9.12,21.955    C443.754,73.631,440.467,81.575,434.603,87.419z" />
          </g>
        </g>
      </svg>

      {modal && (
        <div className="admin__modal">
          <div className="admin__modal-content">
            <div className="admin__modal-content-close" onClick={handleCloseModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 455.111 455.111"
              >
                <circle cx="227.556" cy="227.556" r="227.556" />
                <path
                  fill="#fff"
                  d="M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533  c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533  c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533  c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533  C339.911,308.622,339.911,322.844,331.378,331.378z"
                />
              </svg>
            </div>

            <h4>Редактирование</h4>
            <form 
            
            onSubmit={handleSubmit}>
              
              <label>
                Title:
                <input
                  type="text"
                  placeholder="введите название элемента"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </label>

              <label>
                Level:
                <input
                  type="text"
                  placeholder="введите уровень сложности"
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                />
              </label>

              <label>
                PracticeUrl:
                <input
                  type="text"
                  placeholder="введите url"
                  name="practiceUrl"
                  value={form.practiceUrl}
                  onChange={handleChange}
                />
              </label>

              <label>
                TutorialUrl:
                <input
                  type="text"
                  placeholder="введите url"
                  name="tutorialUrl"
                  value={form.tutorialUrl}
                  onChange={handleChange}
                />
              </label>

              <div>
                <button
                  type='submit'
                  className="admin__newItem-btn-submit"
                  disabled={!valid}
                  
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;
