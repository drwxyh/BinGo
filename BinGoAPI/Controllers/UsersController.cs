using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BinGoAPI.Controllers
{
    public class UsersController : ApiController
    {
        // 根据用户名获取用户信息
        [HttpGet]
        public HttpResponseMessage GetUserInfoByUsername(string username)
        {
            try
            {
                using (BinGoEntities entities = new BinGoEntities())
                {
                    return Request.CreateResponse(HttpStatusCode.OK,
                        entities.AspNetUsers.FirstOrDefault(x => x.UserName == username));
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }
        }
    }
}
