import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { fetchWorkflowTemplateList } from 'services/workflow';
import styled from 'styled-components';
import ListPageLayout from 'components/ListPageLayout';
import NoResult from 'components/NoResult';
import { Col, Input, Row, Table, Form, Button } from 'antd';

const ListContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const TemplateList: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [form] = Form.useForm();
  const [params, setParams] = useState({ keyword: '' });

  const listQ = useQuery('fetchTemplateList', () => fetchWorkflowTemplateList());

  const listData = listQ.data?.data;
  const isEmpty = listData?.length === 0;

  const columns = [{}];

  return (
    <ListPageLayout title={t('menu.label_workflow_tpl')}>
      <Row gutter={16} justify="space-between" align="middle">
        <Col>
          <Button size="large" type="primary" onClick={goCreate}>
            {t('workflow.create_tpl')}
          </Button>
        </Col>
        <Col>
          <Form initialValues={{ ...params }} layout="inline" form={form} onFinish={onSearch}>
            <Form.Item name="keyword">
              <Input.Search
                placeholder={t('dataset.placeholder_name_searchbox')}
                onPressEnter={form.submit}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <ListContainer>
        {isEmpty ? (
          <NoResult text={t('workflow.no_tpl')} to="/workflow-templates/create" />
        ) : (
          <Table dataSource={listData} columns={columns} scroll={{ x: '100%' }} rowKey="name" />
        )}
      </ListContainer>
    </ListPageLayout>
  );

  function goCreate() {
    history.push('/workflow-tempaltes/create');
  }
  function onSearch(values: any) {
    setParams(values);
  }
};

export default TemplateList;
