using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BinGoAPI.Controllers
{
    public class MoviesController : ApiController
    {
        // 获取全部电影，前端实现模糊搜索
        [HttpGet]
        public HttpResponseMessage GetAllMovies()
        {
            try
            {
                using (BinGoEntities entities = new BinGoEntities())
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entities.Movie.ToList());
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // 根据类别获取电影
        [HttpGet]
        public HttpResponseMessage GetMoviesByType(int type)
        {
            try
            {
                using (BinGoEntities entities = new BinGoEntities())
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entities.Movie.Where(x => x.Type == type).ToList());
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
