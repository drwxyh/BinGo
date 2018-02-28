using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BinGo.Controllers
{
    public class MovieController : Controller
    {
        // GET: MovieInfo
        public ActionResult MovieInfo()
        {
            return View();
        }
    }
}