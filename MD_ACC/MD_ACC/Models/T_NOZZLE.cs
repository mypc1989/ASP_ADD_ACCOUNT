namespace MD_ACC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class T_NOZZLE
    {
        [Key]
        public int PK_ID { get; set; }

        public int? StationID { get; set; }

        [StringLength(20)]
        public string FuelType { get; set; }

        [StringLength(20)]
        public string NName { get; set; }

        [StringLength(3)]
        public string NOZZLE_ID { get; set; }

        [StringLength(10)]
        public string ID { get; set; }
    }
}
