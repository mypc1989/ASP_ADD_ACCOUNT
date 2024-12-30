using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MD_ACC.Models
{
    public class CreateStationViewModel
    {
        public T_STATION Station { get; set; }
        public T_USER_APP UserApp { get; set; }
        public List<T_NOZZLE> Nozzles { get; set; } // Danh sách Nozzle
    }
}
