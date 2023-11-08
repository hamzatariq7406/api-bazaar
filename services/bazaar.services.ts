import Logger from "../config/logger";
import bazaarRepo from "../repos/bazaar.repo";
import BazaarType from "../models/bazaar.model";

/**
 * addContent is a function which will add json content to db.
 * @returns all added json 
 */
 const addContent = async (jsonToAdd) => {
    Logger.info('BazaarServices:addContent(): - start');

    let bazaarAsset = new BazaarType();

    bazaarAsset.categoryName = jsonToAdd.categoryName;
    bazaarAsset.jsonContent = jsonToAdd.jsonContent;
  
    const result = await bazaarRepo.addContent(bazaarAsset);
  
    Logger.info('BazaarServices:addContent(): - end');
    return result;
  };

export default {
    addContent
}