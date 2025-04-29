
import { SearchResponse } from "../models/Search.model";
import api, { meliUrl } from "../utils/api";

class SearchService {

  /**
   * Searches items by keywords
   */
  static searchByKeywords(keywords: string): Promise<SearchResponse> {
    return new Promise((resolve, reject) => {
      const apiResponse = api.get(meliUrl.searchByKeywords(keywords));

      apiResponse
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
}

export default SearchService;
