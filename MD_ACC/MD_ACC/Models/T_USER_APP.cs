namespace MD_ACC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class T_USER_APP
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string PK_ID { get; set; }

        [StringLength(50)]
        public string UserName { get; set; }

        [StringLength(50)]
        public string Email { get; set; }

        [StringLength(128)]
        public string Password { get; set; }

        [StringLength(100)]
        public string FullName { get; set; }

        [StringLength(15)]
        public string PhoneNumber { get; set; }

        public byte? State { get; set; }

        [StringLength(10)]
        public string StationID { get; set; }

        [StringLength(20)]
        public string CompanyID { get; set; }

        [StringLength(128)]
        public string SV_ID { get; set; }

        public int? NStationID { get; set; }
    }
}
