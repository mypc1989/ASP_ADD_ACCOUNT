using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace MD_ACC.Models
{
    public partial class Md_Info_Cty : DbContext
    {
        public Md_Info_Cty()
            : base("name=Md_Info_Cty")
        {
        }

        public virtual DbSet<T_COMPANY> T_COMPANY { get; set; }
        public virtual DbSet<T_NOZZLE> T_NOZZLE { get; set; }
        public virtual DbSet<T_STATION> T_STATION { get; set; }
        public virtual DbSet<T_USER_APP> T_USER_APP { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<T_NOZZLE>()
                .Property(e => e.ID)
                .IsFixedLength();

            modelBuilder.Entity<T_USER_APP>()
                .Property(e => e.Email)
                .IsFixedLength();

            modelBuilder.Entity<T_USER_APP>()
                .Property(e => e.PhoneNumber)
                .IsFixedLength();

            modelBuilder.Entity<T_USER_APP>()
                .Property(e => e.StationID)
                .IsFixedLength();
        }
    }
}
