import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useDeletePublic from "../../hooks/apiPublic/useDeletePublic";

const DeleteFromCart = ({ id }) => {
  const { mutateAsync: removeFromCart } = useDeletePublic(null);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(`/cart/${id}`)
          .then((res) => {
            toast.success("Product removed from cart!!");
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div
      onClick={handleDelete}
      className="bg-red-500 flex justify-center items-center p-1 rounded-full active:scale-95 divide-blue-[.4s] cursor-pointer w-max"
    >
      <MdClose className=" text-white rounded-full text-sm" />
    </div>
  );
};

export default DeleteFromCart;
