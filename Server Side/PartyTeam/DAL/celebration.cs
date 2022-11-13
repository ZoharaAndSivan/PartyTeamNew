//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class celebration
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public celebration()
        {
            this.customerofevent = new HashSet<customerofevent>();
            this.itemtoevent = new HashSet<itemtoevent>();
            this.noteevent = new HashSet<noteevent>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public Nullable<int> PepoleAmount { get; set; }
        public Nullable<System.DateTime> DateCelebration { get; set; }
        public Nullable<System.TimeSpan> StartHour { get; set; }
        public Nullable<int> Lenght { get; set; }
        public string ImportantText { get; set; }
        public Nullable<bool> EncodedCelebration { get; set; }
        public Nullable<bool> InEditingCelebration { get; set; }
        public Nullable<int> CelebrationType { get; set; }
        public string Address { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<customerofevent> customerofevent { get; set; }
        public virtual typeevent typeevent { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<itemtoevent> itemtoevent { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<noteevent> noteevent { get; set; }
    }
}
