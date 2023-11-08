import Logger from "../config/logger";
import httpStatusCodes from 'http-status-codes';
import ApiResponse from "../utils/ApiResponse";
import bazaarServices from "../services/bazaar.services";

const addContent = async (req, res) => {
    Logger.info('BazaarController:addContent(): - start');

    const result = await bazaarServices.addContent(req.body);
  
    Logger.info('BazaarController:addContent(): - end');
    ApiResponse.result(res, result, httpStatusCodes.OK);
  };

  export default {
    addContent
  };