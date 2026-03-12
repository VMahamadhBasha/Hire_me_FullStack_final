import { Routes, Route } from "react-router-dom";

// Public Pages
import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Candidate Pages
import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import JobListPage from "../pages/candidate/JobListPage";
import JobDetailPage from "../pages/candidate/JobDetailPage";
import ApplyJobPage from "../pages/candidate/ApplyJobPage";
import MyApplicationsPage from "../pages/candidate/MyApplicationsPage";

// Employer Pages
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import PostJobPage from "../pages/employer/PostJobPage";
import MyJobsPage from "../pages/employer/MyJobsPage";
import ViewApplicantsPage from "../pages/employer/ViewApplicantsPage";

// Recruiter Pages
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import ApplicantManagement from "../pages/recruiter/ApplicantManagement";
import InterviewSchedulePage from "../pages/recruiter/InterviewSchedulePage";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Candidate Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/candidate/jobs" element={<JobListPage />} />
        <Route path="/candidate/jobs/:id" element={<JobDetailPage />} />
        <Route path="/candidate/jobs/:id/apply" element={<ApplyJobPage />} />
        <Route path="/candidate/applications" element={<MyApplicationsPage />} />
      </Route>

      {/* Employer Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/employer/post-job" element={<PostJobPage />} />
        <Route path="/employer/my-jobs" element={<MyJobsPage />} />
        <Route path="/employer/applicants/:jobId" element={<ViewApplicantsPage />} />
      </Route>

      {/* Recruiter Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiter/applicants" element={<ApplicantManagement />} />
        <Route path="/recruiter/interviews" element={<InterviewSchedulePage />} />
      </Route>

    </Routes>
  );
}