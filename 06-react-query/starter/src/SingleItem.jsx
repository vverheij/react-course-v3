import { useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: async ({ taskId, isDone }) => customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      toast.success('Item updated');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: (error) => {
      console.log('error');
      toast.error(error.response.data.msg);
    },
  });

  const { mutate: deleteTask } = useMutation({
    mutationFn: async (id) => customFetch.delete(`/${id}`),
    onSuccess: () => {
      console.log('succes');
      toast.success('Item deleted');
    },
    onError: (error) => {
      console.log(error.reponse.data.msg);
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}>
        {item.title}
      </p>
      <button className="btn remove-btn" type="button" onClick={() => deleteTask(item.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
