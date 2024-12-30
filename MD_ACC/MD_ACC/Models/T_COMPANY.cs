namespace MD_ACC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class T_COMPANY
    {
        [Key]
        [StringLength(20)]
        public string MST { get; set; }

        [StringLength(200)]
        public string TenCongTy { get; set; }
    }
}
