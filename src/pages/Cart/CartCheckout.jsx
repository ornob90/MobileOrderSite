import React from "react";
import Button from "../../components/html/Button";
import usePostPublic from "../../hooks/apiPublic/usePostPublic";
import useAuth from "../../hooks/auth/useAuth";
import toast from "react-hot-toast";

const CartCheckout = () => {
  const { user } = useAuth();
  const { mutateAsync: addOrder } = usePostPublic(
    [
      ["Carts", user?.email],
      ["CartStat", user?.email],
    ],
    `/order/${user?.email}`
  );

  const handleAddOrder = async () => {
    try {
      const response = await addOrder();
      toast.success("Ordered has been confirmed");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      <button
        onClick={handleAddOrder}
        className="bg-black w-full text-white py-2"
      >
        Pay
      </button>
    </div>
  );
};

export default CartCheckout;
