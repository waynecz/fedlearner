import { AxiosPromise } from 'axios';
import request from 'libs/request';
import { CreateProjectFormData, Project, UpdateProjectFormData } from 'typings/project';

export function fetchProjectList(): AxiosPromise<{ data: Project[] }> {
  return request('/v2/projects', {
    singleton: Symbol('fetchProjectList'),
  });
}
export function createProject(data: CreateProjectFormData | any): AxiosPromise<Project> {
  return request.post('/v2/projects', data);
}

export function fetchProject(id: string) {
  return request(`/v2/projects/${id}`);
}

export function updateProject(
  id: string | number,
  data: UpdateProjectFormData | any,
): AxiosPromise<Project> {
  return request.patch(`/v2/projects/${id}`, data);
}
