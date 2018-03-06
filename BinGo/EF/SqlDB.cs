﻿using BinGo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BinGo.EF
{
    // 创建数据库操作上下文，EF用这个文件来创建和访问数据库
    public class SqlDB:DbContext
    {
        public SqlDB() :base("DefaultConnection") {
        }

        public DbSet<Movie> Movies { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>().ToTable("dbMovie");
            modelBuilder.Entity<Movie>().HasKey(x => x.movie_id);
        }
    }
}