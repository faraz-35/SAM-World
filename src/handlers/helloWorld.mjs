export const helloWorldHandler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello World"),
  };
  return response;
};
