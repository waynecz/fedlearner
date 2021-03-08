import React from 'react';

import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Route } from 'react-router-dom';
import CreateTemplate from './CreateTemplate';
import TemplateList from './TemplateList';

function WorkflowsPage() {
  return (
    <ErrorBoundary>
      <Route path="/workflow-templates" exact component={TemplateList} />
      <Route path="/workflow-templates/create" exact component={CreateTemplate} />
    </ErrorBoundary>
  );
}

export default WorkflowsPage;
