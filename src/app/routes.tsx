import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./components/RootLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { DashboardPage } from "./pages/DashboardPage";
import { RoleSelectionPage } from "./pages/RoleSelectionPage";
import { AssessmentPage } from "./pages/AssessmentPage";
import { PerformanceAnalysisPage } from "./pages/PerformanceAnalysisPage";
import { LearningRoadmapPage } from "./pages/LearningRoadmapPage";
import { ProgressTrackingPage } from "./pages/ProgressTrackingPage";
import { ReAssessmentPage } from "./pages/ReAssessmentPage";
import { CompletionPage } from "./pages/CompletionPage";
import { CompanySelectionPage } from "./pages/CompanySelectionPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { MockTestPage } from "./pages/MockTestPage";
import { CompanyAnalysisPage } from "./pages/CompanyAnalysisPage";
import { RoleRecommendationPage } from "./pages/RoleRecommendationPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotificationsPage } from "./pages/NotificationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <DashboardPage /> },

          { path: "role-selection", element: <RoleSelectionPage /> },
          { path: "assessment/:roleId", element: <AssessmentPage /> },
          { path: "performance-analysis/:roleId", element: <PerformanceAnalysisPage /> },
          { path: "learning-roadmap/:roleId", element: <LearningRoadmapPage /> },
          { path: "progress-tracking/:roleId", element: <ProgressTrackingPage /> },
          { path: "re-assessment/:roleId", element: <ReAssessmentPage /> },
          { path: "completion/:roleId", element: <CompletionPage /> },

          { path: "company-selection", element: <CompanySelectionPage /> },
          { path: "resources/:companyId", element: <ResourcesPage /> },
          { path: "mock-test/:companyId", element: <MockTestPage /> },
          { path: "company-analysis/:companyId", element: <CompanyAnalysisPage /> },

          { path: "role-recommendation", element: <RoleRecommendationPage /> },
          { path: "profile", element: <ProfilePage /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "notifications", element: <NotificationsPage /> },
        ],
      },
    ],
  },
]);