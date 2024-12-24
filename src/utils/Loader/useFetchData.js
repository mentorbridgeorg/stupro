const fetchData = async (showLoading, hideLoading) => {
  console.log("Loading started");
  showLoading(); // Show loader

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //  2-second delay
    console.log('Data loaded successfully!');
  } catch (error) {
    console.log('Error', 'Failed to load data');
  } finally {
    console.log("Loading finished");
    hideLoading(); // Hide loader
  }
};

export default fetchData;
