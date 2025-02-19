import { useLoading } from "./LoaderStateManagement";

export const fetchData = async () => {
  const { showLoading, hideLoading } = useLoading();
  showLoading(); // Show the loader
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Data fetched successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading(); // Hide the loader
  }
};
function alert(arg0: string) {
  throw new Error("Function not implemented.");
}

