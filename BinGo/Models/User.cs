using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BinGo.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public int Role { get; set; }
        public string CreateTime { get; set; }
        public string UpdateTime { get; set; }
    }
}