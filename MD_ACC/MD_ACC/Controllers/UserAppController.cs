using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MD_ACC.Models;

namespace MD_ACC.Controllers
{
    public class UserAppController : Controller
    {
        private Md_Info_Cty db = new Md_Info_Cty();

        // GET: UserApp
        public ActionResult Index()
        {
            return View(db.T_USER_APP.ToList());
        }

        // GET: UserApp/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_USER_APP t_USER_APP = db.T_USER_APP.Find(id);
            if (t_USER_APP == null)
            {
                return HttpNotFound();
            }
            return View(t_USER_APP);
        }

        // GET: UserApp/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: UserApp/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        /*[HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "PK_ID,UserName,Email,Password,FullName,PhoneNumber,State,StationID,CompanyID,SV_ID,NStationID")] T_USER_APP t_USER_APP)
        {
            if (ModelState.IsValid)
            {
                db.T_USER_APP.Add(t_USER_APP);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(t_USER_APP);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]*/
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "PK_ID,UserName,Email,Password,FullName,PhoneNumber,State,StationID,CompanyID,SV_ID,NStationID")] T_USER_APP t_USER_APP)
        {
            if (ModelState.IsValid)
            {
                db.T_USER_APP.Add(t_USER_APP);
                db.SaveChanges();

                // Tạo bảng mới trong SQL Server dựa trên UserName
                string tableName = "I" + t_USER_APP.UserName;

                string createTableQuery = $@"
                SET ANSI_NULLS ON;
                SET QUOTED_IDENTIFIER ON;
                IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = '{tableName}' AND xtype = 'U')
                CREATE TABLE [dbo].[{tableName}] (
                    [PK_ID] INT IDENTITY(1,1) NOT NULL,
                    [Bill_PK] INT NOT NULL,
                    [Bill_Col1] NVARCHAR(MAX) NULL,
                    [Bill_Col2] NVARCHAR(MAX) NULL,
                    [Bill_Col3] NVARCHAR(MAX) NULL,
                    [Bill_ReturnString] NVARCHAR(MAX) NOT NULL,
                    [TTime] DATETIME NULL DEFAULT (GETDATE()),
                 CONSTRAINT [PK_{tableName}] PRIMARY KEY CLUSTERED (
                    [PK_ID] ASC
                 ) WITH (
                    PAD_INDEX = OFF, 
                    STATISTICS_NORECOMPUTE = OFF, 
                    IGNORE_DUP_KEY = OFF, 
                    ALLOW_ROW_LOCKS = ON, 
                    ALLOW_PAGE_LOCKS = ON, 
                    OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF
                 ) ON [PRIMARY]
                ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY];
                ";

                using (var connection = db.Database.Connection)
                {
                    connection.Open();
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = createTableQuery;
                        command.ExecuteNonQuery();
                    }
                }

                return RedirectToAction("Index");
            }

            return View(t_USER_APP);
        }



        // GET: UserApp/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_USER_APP t_USER_APP = db.T_USER_APP.Find(id);
            if (t_USER_APP == null)
            {
                return HttpNotFound();
            }
            return View(t_USER_APP);
        }

        // POST: UserApp/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PK_ID,UserName,Email,Password,FullName,PhoneNumber,State,StationID,CompanyID,SV_ID,NStationID")] T_USER_APP t_USER_APP)
        {
            if (ModelState.IsValid)
            {
                db.Entry(t_USER_APP).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(t_USER_APP);
        }

        // GET: UserApp/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_USER_APP t_USER_APP = db.T_USER_APP.Find(id);
            if (t_USER_APP == null)
            {
                return HttpNotFound();
            }
            return View(t_USER_APP);
        }

        // POST: UserApp/Delete/5

        /*[HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            T_USER_APP t_USER_APP = db.T_USER_APP.Find(id);
            db.T_USER_APP.Remove(t_USER_APP);
            db.SaveChanges();
            return RedirectToAction("Index");
        }*/
        /*
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            // Tìm bản ghi dựa trên ID
            T_USER_APP t_USER_APP = db.T_USER_APP.Find(id);
            if (t_USER_APP != null)
            {
                db.T_USER_APP.Remove(t_USER_APP);
                db.SaveChanges();

                // Lấy giá trị username
                string userName = t_USER_APP.UserName;
                string tableName = "I" + userName;

                // Xóa bảng liên quan nếu nó tồn tại
                string dropTableQuery = $@"
                IF OBJECT_ID('{tableName}', 'U') IS NOT NULL
                DROP TABLE [{tableName}];";

                using (var connection = db.Database.Connection)
                {
                    connection.Open();
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = dropTableQuery;
                        command.ExecuteNonQuery();
                    }
                }
            }

            return RedirectToAction("Index");
        }*/
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            // Tìm bản ghi dựa trên ID
            T_USER_APP t_USER_APP = db.T_USER_APP.Find(id);
            if (t_USER_APP != null)
            {
                db.T_USER_APP.Remove(t_USER_APP);
                db.SaveChanges();

                // Lấy giá trị username
                string userName = t_USER_APP.UserName;
                string tableName = "I" + userName;

                // Kiểm tra và in tên bảng
                Console.WriteLine($"Generated table name: {tableName}");

                // Xóa bảng liên quan nếu nó tồn tại
                string dropTableQuery = $@"
        IF OBJECT_ID('{tableName}', 'U') IS NOT NULL
        DROP TABLE [{tableName}];";

                try
                {
                    using (var connection = db.Database.Connection)
                    {
                        connection.Open();
                        using (var command = connection.CreateCommand())
                        {
                            command.CommandText = dropTableQuery;
                            command.ExecuteNonQuery();
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error while dropping table: {ex.Message}");
                }
            }

            return RedirectToAction("Index");
        }






        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
