using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using BinGo.EF;
using BinGo.Models;

namespace BinGo.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        private SqlDB _db = new SqlDB();
       
        // GET: /Test/
        public ActionResult Test()
        {
            return View();
        }

        public JsonResult GetMovie()
        {
            SqlDB oSqlDb=new SqlDB();
            List<Movie> mylist = oSqlDb.Movies.ToList();
            return Json(mylist, JsonRequestBehavior.AllowGet);
        }

        
    }
}