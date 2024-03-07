export default interface apiResponse {
  data?: {
    // This will be included in suggestions so if possible use the format
    statusCode?: number;
    isSuccess?: boolean;
    errorsMessages?: Array<string>;
    result: {
      //This will not give suggestions
      [key: string]: string;
    };
  };
  error?: any;
}
