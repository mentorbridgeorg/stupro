export const fetchData = async () => {
    showLoading(); // Show the loader
    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Data fetched successfully!');
    } catch (error) {
      console.error(error);
    } finally {
      hideLoading(); // Hide the loader
    }
  };