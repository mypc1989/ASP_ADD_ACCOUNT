namespace MD_ACC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class T_STATION
    {
        [Key]
        public int PK_ID { get; set; }

        [StringLength(100)]
        public string StationName { get; set; }

        [StringLength(10)]
        public string StationID { get; set; }

        [StringLength(20)]
        public string CompanyID { get; set; }
    }
}
