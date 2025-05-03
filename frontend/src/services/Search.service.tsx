import { ItemDetail, SearchResponse } from '../models/Search.model';
import api, { meliUrl } from '../utils/api';

class SearchService {
  /**
   * Searches items by keywords
   * @param keywords - The keywords to search for
   */
  static searchByKeywords(keywords: string): Promise<SearchResponse> {
    return new Promise((resolve, reject) => {
      const apiResponse = api.get(meliUrl.searchByKeywords(keywords));

      apiResponse
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || error.response;
          reject(errorMessage);
        });
    });
  }

  /**
   * Gets item details by id
   * @param id - The id of the item to search for
   * @returns Item details
   */
  static getItemById(id: string): Promise<ItemDetail> {
    return new Promise((resolve, reject) => {
      const apiResponse = api.get(meliUrl.getItemDetail(id));

      apiResponse
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || error.response;
          reject(errorMessage);
        });
    });
  }
}

export default SearchService;
