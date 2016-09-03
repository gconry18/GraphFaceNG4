module.exports = [
  {
    "type": "heading",
    "defaultValue": "GraphFace Settings"
  },
  {
    "type": "text",
    "defaultValue": "Make it yours!"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Graphics"
      },
      /*{
        "type": "toggle",
        "messageKey": "INVERT",
        "defaultValue": false,
        "label": "Invert Colors"
      },*/
      {
        "type": "toggle",
        "messageKey": "BACKGROUND",
        "defaultValue": true,
        "label": "Show time ring"
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "More Settings"
      },
      {
		  "type": "select",
		  "messageKey": "DATE",
		  "defaultValue": "DD-MM",
		  "label": "Date Format",
		  "options": [
			{ 
			  "label": "DD-MM", 
			  "value": "DD-MM" 
			},
			{ 
			  "label": "MM-DD",
			  "value": "MM-DD" 
			}
		  ]
	  },
      {
		  "type": "select",
		  "messageKey": "GRAPHPERIOD",
		  "defaultValue": "60",
		  "label": "Graph Updates",
		  "options": [
			{ 
			  "label": "No Updates", 
			  "value": "0" 
			},
			{ 
			  "label": "1 second",
			  "value": "1" 
			},
			{ 
			  "label": "5 seconds",
			  "value": "5" 
			},
			{ 
			  "label": "10 seconds",
			  "value": "10" 
			},
			{ 
			  "label": "30 seconds",
			  "value": "30" 
			},
			{ 
			  "label": "1 minute",
			  "value": "60" 
			}
		  ]
	  }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];