export const PermessionConstant= [
      {
        label: ("headerbar.Employees"),
        moduleID:1,
        children: [
          {
            value: 1,
            label: ("employees.Add Employee"),
            moduleID:1,
          },
          {
            value: 2,
            label: ("permission.Edit Employee"),
            moduleID:1,
          },
          {
           value: 3,
           label:  ("permission.Set Employee Permission"),
           moduleID:1,
          },  
          {
            value: 4,
            label: ("permission.Delete Employee"),
            moduleID:1,
          },     
        ]
      },
      {
        value: 5,
        label:("PortfolioPage.Portfolio"),
        moduleID: 2,
      },
      {
          value: 6,
          label: ("Common.Finances_analytics"),
          moduleID: 3,
      },
      {
          value: 7,
          label: ("Common.Members_analytics"),
          moduleID: 4,
      },
      {
          value: 8,
          label: ("Common.Claims_analytics"),
          moduleID: 5,
      },
      {
          value: 9,
          label: ("Common.Gross_profit"),
          moduleID: 6,
      },
      {
        label:("Common.Claim_Prediction"),
        moduleID: 7,
        children: [
          {
              value: 10,
              label:  ("permission.Claims Overview"),
              moduleID: 7,
          },
          {
              value: 11,
              label:  ("Common.Approved_Claims"),
              moduleID: 7,
          },
          {
              value: 12,
              label:  ("Common.Rejected_Claims"),
              moduleID: 7,
          },
        ]
      },
      ,
      {
          value: 13,
          label: ("Common.Patient_Underwriting"),
          moduleID: 8,
      },
      {
          value: 14,
          label: ("Common.Company_Underwriting"),
          moduleID: 9,
      },{
          label:  ("Common.Medical_Approvals"),
          moduleID: 10,
          children: [
            {
              value: 15,
              label:  ("permission.Approvals Overview"),
              moduleID: 10,
            },
            {
              value: 16,
              label: ("Common.Approved_Approvals"),
              moduleID: 10,
            },
            {
              value: 17,
              label: ("Common.Rejected_Approvals"),
              moduleID: 10,
            },  
            {
              value: 18,
              label: ("Common.Need_to_be_Reviewed_Approvals"),
              moduleID: 10,
            },   
            {
              value: 19,
              label: ("permission.View Employees"),
              moduleID: 10,
            },       
          ]
        },
    ];


export const InitalValue={

}