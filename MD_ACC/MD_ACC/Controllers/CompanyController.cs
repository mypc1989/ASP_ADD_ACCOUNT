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
    public class CompanyController : Controller
    {
        private Md_Info_Cty db = new Md_Info_Cty();

        // GET: Company
        public ActionResult Index()
        {
            return View(db.T_COMPANY.ToList());
        }

        // GET: Company/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_COMPANY t_COMPANY = db.T_COMPANY.Find(id);
            if (t_COMPANY == null)
            {
                return HttpNotFound();
            }
            return View(t_COMPANY);
        }

        // GET: Company/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Company/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "MST,TenCongTy")] T_COMPANY t_COMPANY)
        {
            if (ModelState.IsValid)
            {
                db.T_COMPANY.Add(t_COMPANY);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(t_COMPANY);
        }

        // GET: Company/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_COMPANY t_COMPANY = db.T_COMPANY.Find(id);
            if (t_COMPANY == null)
            {
                return HttpNotFound();
            }
            return View(t_COMPANY);
        }

        // POST: Company/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "MST,TenCongTy")] T_COMPANY t_COMPANY)
        {
            if (ModelState.IsValid)
            {
                db.Entry(t_COMPANY).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(t_COMPANY);
        }

        // GET: Company/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            T_COMPANY t_COMPANY = db.T_COMPANY.Find(id);
            if (t_COMPANY == null)
            {
                return HttpNotFound();
            }
            return View(t_COMPANY);
        }

        // POST: Company/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            T_COMPANY t_COMPANY = db.T_COMPANY.Find(id);
            db.T_COMPANY.Remove(t_COMPANY);
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
