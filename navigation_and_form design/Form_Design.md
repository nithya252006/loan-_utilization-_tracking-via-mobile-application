 Form Design

 Project

Loan Tracking and Utilization Monitoring Application

 Purpose

Forms are used to collect, validate, and manage user information throughout the system.


 Login Form

 Fields
```text
| Field Name | Type     | Validation |
| ---------- | -------- | ---------- |
| Email      | Email    | Required   |
| Password   | Password | Required   |

```
 Registration Form

 Fields
```text
| Field Name   | Type     | Validation |
| ------------ | -------- | ---------- |
| Full Name    | Text     | Required   |
| Email        | Email    | Required   |
| Phone Number | Number   | Required   |
| Password     | Password | Required   |
```
 Expense Entry Form

 Fields
```text
| Field Name   | Type      | Validation |
| ------------ | --------- | ---------- |
| Category     | Dropdown  | Required   |
| Amount       | Number    | Required   |
| Description  | Text Area | Required   |
| Expense Date | Date      | Required   |
```
 Layout

```text
+--------------------------+
|      ADD EXPENSE         |
+--------------------------+
| Category                 |
| [________________]       |
|                          |
| Amount                   |
| [________________]       |
|                          |
| Description              |
| [________________]       |
|                          |
| Date                     |
| [________________]       |
|                          |
| [ Save Expense ]         |
+--------------------------+
```

 Proof Upload Form

 Fields
```text
| Field Name  | Type        |
| ----------- | ----------- |
| Select File | File Upload |
| Description | Text Area   |
```
 Layout

```text
+--------------------------+
|      UPLOAD PROOF        |
+--------------------------+
| Select File              |
| [ Choose File ]          |
|                          |
| Description              |
| [________________]       |
|                          |
| [ Upload ]               |
+--------------------------+

```
Reminder Form

Fields
```text
| Field Name       | Type      |
| ---------------- | --------- |
| User ID          | Dropdown  |
| Reminder Message | Text Area |
| Reminder Date    | Date      |


```
Form Features

* Input Validation
* User-Friendly Layout
* Error Handling
* Secure Data Submission
* Responsive Android Design



 Technology Used

* HTML
* CSS
* Javascript
* Python (Flask/Django)
* MySQL
