import { DEFAULT_ITEM_PER_PAGE,
         DEFAULT_AD_QUERY_ID } from './Pagination';

export function parseQueryString(parameters = {})
{
    let queryString = '?';
    const itemPerPage = (parameters.item_per_page != null) ? parameters.item_per_page : DEFAULT_ITEM_PER_PAGE;

    queryString += 'item_per_page=' + itemPerPage + '&';

    const adQueryID = (parameters.adQueryID != null) ? parameters.adQueryID : DEFAULT_AD_QUERY_ID;
    queryString += 'ad_query_id=' + adQueryID + '&';

    queryString = queryString.substr(0, queryString.length - 1);
    return queryString;
}
