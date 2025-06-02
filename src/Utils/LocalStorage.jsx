const employees = [
  {
    "id": 1,
    "firstName": "Rajesh", // Added Indian first name
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Complete Project Report",
        "description": "Prepare and finalize the Q2 project report.",
        "date": "2025-04-01",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss the new feature requirements with the client.",
        "date": "2025-04-02",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review the latest PRs for bug fixes.",
        "date": "2025-04-03",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2, // Count of active tasks
      "newTask": 1, // Count of new tasks
      "completed": 1, // Count of completed tasks
      "failed": 0 // Count of failed tasks
    }
  },
  {
    "id": 2,
    "firstName": "Aarav", // Added Indian first name
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Presentation",
        "description": "Create slides for the upcoming team briefing.",
        "date": "2025-04-04",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Cleanup",
        "description": "Remove outdated records and optimize database queries.",
        "date": "2025-04-05",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Priya", // Added Indian first name
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Fix the login issue reported by users.",
        "date": "2025-04-06",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Test API Endpoints",
        "description": "Ensure all API endpoints return correct responses.",
        "date": "2025-04-07",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Documentation",
        "description": "Update user guide and API documentation.",
        "date": "2025-04-08",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Meera", // Added Indian first name
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Social Media Strategy",
        "description": "Plan next quarter's social media campaigns.",
        "date": "2025-04-09",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Website Updates",
        "description": "Apply design changes to the company website.",
        "date": "2025-04-10",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Sanya", // Added Indian first name
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Team Training",
        "description": "Organize a training session on cybersecurity best practices.",
        "date": "2025-04-11",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Performance Review",
        "description": "Conduct employee performance reviews for the quarter.",
        "date": "2025-04-12",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
];

  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const local_employees_data =  JSON.parse(localStorage.getItem('employees'))      
    const local_admin_data =  JSON.parse(localStorage.getItem('admin'))
    // console.log(local_admin_data, local_employees_data)                            
    return {local_admin_data, local_employees_data}
  }
