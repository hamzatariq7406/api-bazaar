import Logger from "../config/logger";

/*
 *create Content method , it will create a new json content
 */
 const addContent = async (asset: any) => {
    try {
      Logger.info('BazaarRepo:addContent(): - start');
      //call the save method to save the user account
      const result = await asset.save();
  
      Logger.info('BazaarRepo:addContent(): - end');
  
      return result;
    } catch (e) {
      Logger.error(`BazaarRepo:addContent(): ${e} `);
      return e;
    }
  };

export default {
    addContent
}