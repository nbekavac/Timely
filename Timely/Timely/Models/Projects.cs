using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Timely.Models
{
    public class Projects
    {
        public string Project { get; set; }
        public DateTime Start { get; set; }

        public DateTime Stop { get; set; }
        public TimeSpan Duration { get; set; }
    }
}
