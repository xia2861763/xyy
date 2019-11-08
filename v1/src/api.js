import {fetchGet,fetchPost} from 'http'

/*export const getImageData = (params) => {
  return fetchGet('../../static/data.json',params)
}*/
export const getImageData = p => fetchPost('http://www.baiodu.com/api/v1/users/my_address/address_edit_before', p)
