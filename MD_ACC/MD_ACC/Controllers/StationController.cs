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
    public class StationController : Controller
    {
        private Md_Info_Cty db = new Md_Info_Cty();

        // GET: Station
        public ActionResult Index()
        {
            return View(db.T_STATION.ToList());
        }

        // GET: Station/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_STATION t_STATION = db.T_STATION.Find(id);
            if (t_STATION == null)
            {
                return HttpNotFound();
            }
            return View(t_STATION);
        }

        // GET: Station/Create
        public ActionResult Create()
        {
            
            return View();
        }
        //---https://localhost:44357/Station/GetCompanies?term=1801
        public JsonResult GetCompanies(string term)
        {
            using (var context = new Md_Info_Cty())
            {
                // Tìm kiếm công ty theo từ khóa (term)
                var companies = context.T_COMPANY
                    .Where(c => c.MST.Contains(term) || c.TenCongTy.Contains(term)) // Lọc theo MST hoặc tên công ty
                    .Select(c => new
                    {
                        id = c.MST, // Giá trị MST (tương tự CompanyID)
                        label = c.MST + " - " + c.TenCongTy, // Định dạng hiển thị
                        value = c.MST // Giá trị trả về khi chọn
                    })
                    .ToList();

                return Json(companies, JsonRequestBehavior.AllowGet);
            }
        }


        // POST: Station/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.

        /*[HttpPost]
        public ActionResult Create(CreateStationViewModel model)
        {
            if (ModelState.IsValid)
            {
                using (var context = new Md_Info_Cty())
                {
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            // Thêm Station
                            context.T_STATION.Add(model.Station);

                            // Thêm UserApp
                            context.T_USER_APP.Add(model.UserApp);

                            // Thêm danh sách Nozzle
                            foreach (var nozzle in model.Nozzles)
                            {
                                context.T_NOZZLE.Add(nozzle);
                            }

                            // Lưu thay đổi
                            context.SaveChanges();
                            transaction.Commit();

                            return RedirectToAction("Index");
                        }
                        catch (Exception ex)
                        {
                            transaction.Rollback();
                            ModelState.AddModelError("", $"Lỗi khi lưu dữ liệu: {ex.Message}");
                        }
                    }
                }
            }

            return View(model);
        }*/
        [HttpPost]
        public ActionResult Create(CreateStationViewModel model)
        {
            if (ModelState.IsValid)
            {
                using (var context = new Md_Info_Cty())
                {
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            // Thêm Station vào T_STATION
                            context.T_STATION.Add(model.Station);
                            context.SaveChanges();

                            // Lấy ID vừa được tạo cho T_STATION
                            int stationId = model.Station.PK_ID;

                            // Thêm UserApp vào T_USER_APP (nếu cần)
                            //model.UserApp.StationID = stationId; // Gán StationID nếu có liên kết
                            context.T_USER_APP.Add(model.UserApp);

                            // Thêm danh sách Nozzle vào T_NOZZLE
                            foreach (var nozzle in model.Nozzles)
                            {
                                nozzle.StationID = stationId; // Gán StationID cho mỗi Nozzle
                                context.T_NOZZLE.Add(nozzle);
                            }

                            // Lưu thay đổi
                            context.SaveChanges();

                            // Commit transaction
                            transaction.Commit();

                            return RedirectToAction("Index");
                        }
                        catch (Exception ex)
                        {
                            // Rollback transaction nếu có lỗi
                            transaction.Rollback();
                            ModelState.AddModelError("", $"Lỗi khi lưu dữ liệu: {ex.Message}");
                        }
                    }
                }
            }

            return View(model);
        }




        // GET: Station/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_STATION t_STATION = db.T_STATION.Find(id);
            if (t_STATION == null)
            {
                return HttpNotFound();
            }
            return View(t_STATION);
        }

        // POST: Station/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PK_ID,StationName,StationID,CompanyID")] T_STATION t_STATION)
        {
            if (ModelState.IsValid)
            {
                db.Entry(t_STATION).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(t_STATION);
        }

        // GET: Station/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_STATION t_STATION = db.T_STATION.Find(id);
            if (t_STATION == null)
            {
                return HttpNotFound();
            }
            return View(t_STATION);
        }

        // POST: Station/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            T_STATION t_STATION = db.T_STATION.Find(id);
            db.T_STATION.Remove(t_STATION);
            db.SaveChanges();
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
