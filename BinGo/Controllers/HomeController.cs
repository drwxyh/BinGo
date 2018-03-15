using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BinGo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Movie()
        { 
            return View();
        }

        public ActionResult User()
        {
            return View();
        }

        public ActionResult UserManage()
        {
            return View();
        }

        public ActionResult Search()
        {
            return View();
        }
    }
}