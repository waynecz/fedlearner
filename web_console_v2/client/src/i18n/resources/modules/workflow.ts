import { I18nMessageModule, separateLng } from 'i18n/helpers';

const workflow: I18nMessageModule = {
  no_result: { zh: '暂无工作流' },
  execution_detail: { zh: '工作流详情' },
  name: { zh: '工作流名称' },
  our_config: { zh: '我方配置' },
  peer_config: { zh: '对方配置' },
  federated_note: { zh: '与对方工作流相同颜色的模块为关联模块' },
  ptcpt_permission: { zh: '合作伙伴编辑权限' },
  current_config: { zh: '当前配置' },
  create_workflow: { zh: '创建工作流', en: 'Create workflow' },
  fork_workflow: { zh: '复制工作流', en: 'Fork workflow' },

  action_re_run: { zh: '重新运行' },
  action_run: { zh: '立即运行' },
  action_configure: { zh: '立即配置' },
  action_stop_running: { zh: '停止运行' },
  action_fork: { zh: '复制' },
  action_detail: { zh: '详情' },
  action_show_report: { zh: '查看模型报告' },

  btn_inspect_logs: { zh: '查看日志' },
  btn_close: { zh: '关闭' },
  btn_conf_done: { zh: '配置完成' },
  btn_conf_next_step: { zh: '配置下一步（{{current}}/{{total}}）' },
  btn_see_peer_config: { zh: '查看对方配置' },
  btn_hide_peer_config: { zh: '隐藏对方配置' },
  btn_send_2_ptcpt: { zh: '发送给合作伙伴' },

  col_status: { zh: '任务状态' },
  col_project: { zh: ' 隶属项目' },
  col_creator: { zh: ' 创建者' },
  col_date: { zh: ' 创建时间' },
  col_actions: { zh: '操作' },
  col_pod: { zh: 'POD' },
  col_forkable: { zh: '是否可复制' },
  col_worker_status: { zh: '运行状体' },
  col_worker_type: { zh: '类型' },

  state_success: { zh: '成功' },
  state_failed: { zh: '失败' },
  state_stopped: { zh: '已停止' },
  state_running: { zh: '运行中' },
  state_prepare_run: { zh: '正在启动中' },
  state_prepare_stop: { zh: '正在停止中' },
  state_warmup_underhood: { zh: '系统预热中' },
  state_pending_accept: { zh: '待配置' },
  state_ready_to_run: { zh: '配置成功' },
  state_configuring: { zh: '合作伙伴配置中' },
  state_unknown: { zh: '状态未知' },

  sent_failed: { zh: '发送失败' },
  sent_failed_desc: {
    zh: '与合作伙伴连接失败，失败原因，请检查连接状态成功后在工作流列表中重新发送',
  },
  override_warn: { zh: '重新运行将覆盖历史结果' },
  override_warn_desc: { zh: '是否确认重新运行当前工作流任务将覆盖历史运行结果？' },

  label_name: { zh: '工作流名称' },
  label_global_config: { zh: '全局配置' },
  label_project: { zh: '关联项目' },
  label_peer_forkable: { zh: '合作伙伴复制权限' },
  label_template: { zh: '工作流模板' },
  label_allow: { zh: '允许' },
  label_not_allow: { zh: '不允许' },
  label_exist_template: { zh: '选择已有' },
  label_pairing_exist_template: { zh: '选择配对模板' },
  label_new_template: { zh: '新建模板' },
  label_pairing_new_template: { zh: '上传配对模板' },
  label_new_template_name: { zh: '新建模板名称' },
  label_upload_template: { zh: '上传模板文件' },
  label_template_comment: { zh: '工作流模板说明' },
  label_template_name: { zh: '模板 (Group)' },
  label_running_time: { zh: '运行时长' },
  label_role: { zh: 'Role' },
  label_job_type: { zh: '任务类型' },
  label_job_created: { zh: '任务创建时间' },
  label_job_vars: { zh: '任务参数' },
  label_job_metrics: { zh: '任务运行结果指标' },
  label_job_logs: { zh: '任务运行日志' },
  label_pod_list: { zh: '各 worker 运行日志及状态' },

  placeholder_name_searchbox: { zh: '根据工作流名称搜索' },
  placeholder_name: { zh: '请输入工作流名称' },
  placeholder_template: { zh: '请选择模板' },
  placeholder_project: { zh: '请关联一个项目' },
  placeholder_comment: { zh: '请输入工作流模板说明' },
  placeholder_template_name: { zh: '请输入模板名称' },

  msg_sent_success: { zh: '工作流发送成功' },
  msg_template_required: { zh: '请选择一个模板！' },
  msg_get_template_failed: { zh: '获取模板列表失败' },
  msg_only_1_tpl: { zh: '只允许上传一个模板文件！' },
  msg_config_unfinished: { zh: '未完成配置，请先完成配置后再次点击发送' },
  msg_config_unconfirm_or_unfinished: { zh: '双侧配置未确认或未完成，请检查后进行发送' },
  msg_sure_2_cancel_create: { zh: '确认取消创建工作流？' },
  msg_sure_2_cancel_fork: { zh: '确认取消复制工作流？' },
  msg_sure_2_exist_create: { zh: '确定要离开吗，当前表单内容将全部丢失！' },
  msg_effect_of_cancel_create: { zh: '取消后，已配置内容将不再保留' },
  msg_project_required: { zh: '请选择项目！' },
  msg_name_required: { zh: '请输入名称！' },
  msg_no_abailable_tpl: { zh: '暂无可用模板，请手动新建' },
  msg_pairing_no_abailable_tpl: { zh: '暂无可用的配对模板，请手动上传' },
  msg_tpl_file_required: { zh: '请选择一个合适的模板文件！' },
  msg_tpl_name_required: { zh: '请输入模板名！' },
  msg_tpl_config_missing: { zh: '模板格式错误，缺少 config 字段！' },
  msg_tpl_alias_missing: { zh: '模板格式错误，缺少 config.group_alias 字段！' },
  msg_tpl_alias_wrong: { zh: '模板 group_alias 与合作方模板不一致，请检查！' },
  msg_tpl_is_left_wrong: { zh: '模板 is_left 值须为{{value}}，请检查' },
  msg_peer_config_failed: { zh: '获取对侧工作流配置失败' },
  msg_peer_not_ready: { zh: '对侧配置未完成' },
  msg_not_config: { zh: '工作流配置未完成' },
  msg_workflow_name_invalid: { zh: '工作流名字只能是小写英文字母和空格' },
  msg_sure_to_stop: { zh: '确认停止运行该工作流吗?' },
  msg_unforkable: { zh: '根据对侧配置，该工作流不允许被复制，请与对侧沟通后再试' },
  msg_get_peer_cfg_failed: { zh: '获取对侧配置失败: ' },

  var_auth_write: { zh: '可编辑' },
  var_auth_read: { zh: '可见' },
  var_auth_private: { zh: '不可见' },

  step_basic: { zh: '基础配置' },
  step_config: { zh: '工作流配置' },

  job_node_pending: { zh: ' 待配置' },
  job_node_configuring: { zh: '配置中' },
  job_node_config_completed: { zh: '配置完成' },
  job_node_unfinished: { zh: '未完成配置' },
  job_node_success: { zh: '运行成功' },
  job_node_waiting: { zh: '待运行' },
  job_node_failed: { zh: '运行失败' },
  job_node_running: { zh: '运行中' },
  job_node_stop_running: { zh: '手动停止运行' },
  job_node_stopped: { zh: '已停止' },
  pod_unknown: { zh: '状态未知' },
};

export default separateLng(workflow);
