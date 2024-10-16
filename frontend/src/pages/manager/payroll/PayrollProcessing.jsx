import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

const PayrollProcessing = () => {
const {fetchUsers,users} = useAuthStore();

  useEffect(() => {
    document.title = 'Payroll Processing';
    const fetchUserData = async () => {
      try {
        await fetchUsers();
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error('Failed to load user data. Please try again.');
      }
    };
    
    fetchUserData();
  }, [fetchUsers]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Payroll Processing</h1>

      <div className="mb-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Employee List</h2>
            <div className="overflow-x-auto">
              <table className="table w-full mb-4">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border px-4 py-2">Lastname</th>
                    <th className="border px-4 py-2">Firstname</th>
                    <th className="border px-4 py-2">Position</th>
                    <th className="border px-4 py-2">Role</th>
                    <th className="border px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user._id} className="hover:bg-neutral hover:text-white">
                        <td className="border px-4 py-2">{user.lastName || 'N/A'}</td>
                        <td className="border px-4 py-2">{user.firstName || 'N/A'}</td>
                        <td className="border px-4 py-2">{user.position || 'N/A'}</td>
                        <td className="border px-4 py-2">{user.role || 'N/A'}</td>
                        <td className="border px-4 py-2">{user.status || 'N/A'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No employees found!</td>
                    </tr>
                  )}                
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Attendance Summary</h2>
            <p>Track attendance and working hours.</p>
            <Link to="/attendance" className="btn btn-primary"><button>View Attendance</button></Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Salary Computation</h2>
            <p>Compute employee salaries based on attendance and performance.</p>
            <Link to="/salary-computation" className="btn btn-primary"><button>Salary Computation</button></Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Deductions Management</h2>
            <p>Apply deductions like insurance, etc.</p>
            <Link to="/deductions-management" className="btn btn-primary"><button>Deductions management</button></Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Compliance Tracking</h2>
            <p>Track compliance with labor laws, and other payroll rules.</p>
            <Link to="/compliance-tracking" className="btn btn-primary"><button>Track Compliance</button></Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Request Budget</h2>
            <p>Request additional budget for payroll management.</p>
            <Link to="/request-budget" className="btn btn-primary"><button>Request Budget</button></Link>
          </div>
        </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Payroll Distribution</h2>
              <p>
                Efficiently manage and distribute payroll to employees through various payment methods.
              </p>
              <Link to="/payroll-distribution" className="btn btn-primary"><button>Payroll Distribution</button></Link>
            </div>
          </div>

                <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Payroll Reports</h2>
            <p>Generate detailed payroll reports for auditing and record-keeping.</p>
            <Link to="/generate-reports" className="btn btn-primary"><button>Reports</button></Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Payroll History</h2>
            <p>View historical payroll data for all employees.</p>
            <Link to="/payroll-history" className="btn btn-primary"><button>Track Compliance</button></Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PayrollProcessing;
