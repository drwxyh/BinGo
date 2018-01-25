using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BinGo.Models;

namespace BinGo.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Random()
        {
            var movie = new Movie() { Name="Shrek!"};
            return View(movie);
        }
    }
}