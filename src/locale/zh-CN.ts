import localeLogin from '@/views/login/locale/zh-CN';
import localeSysMenu from '@/views/admin/menu/locale/zh-CN';
import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
import localeLogLogin from '@/views/log/login/locale/zh-CN';
import localeIconPicker from '@/components/icon-picker/locale/zh-CN';
import localeLogOpera from '@/views/log/opera/locale/zh-CN';
import localeSysDept from '@/views/admin/dept/locale/zh-CN';
import localeSysApi from '@/views/admin/api/locale/zh-CN';
import localeServerMonitor from '@/views/monitor/server/locale/zh-CN';
import localeRedisMonitor from '@/views/monitor/redis/locale/zh-CN';
import localeSysUser from '@/views/admin/user/locale/zh-CN';
import localeSysRole from '@/views/admin/role/locale/zh-CN';
import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '대시 보드',
  'menu.server.dashboard': '대시 보드-서버',
  'menu.server.workplace': '작업 공간-서버',
  'menu.system': '시스템 관리',
  'menu.log': '로그',
  'menu.monitor': '시스템 모니터링',
  'menu.server.monitor': '실시간 모니터링-서버',
  'menu.list': '목록 페이지',
  'menu.result': '결과 페이지',
  'menu.exception': '예외 페이지',
  'menu.form': '양식 페이지',
  'menu.profile': '상세 페이지',
  'menu.visualization': '데이터 시각화',
  'menu.user': '개인 센터',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '자주 묻는 질문',
  'navbar.docs': '문서 센터',
  'navbar.action.locale': '한국어로 번역',
  'modal.title.tips': '알림',
  'modal.title.tips.delete': '정말로 삭제하시겠습니까?',
  'switch.open': '열다',
  'switch.close': '닫다',
  'submit.create.success': '성공적으로 생성되었습니다',
  'submit.update.success': '성공적으로 업데이트되었습니다',
  'submit.delete.success': '성공적으로 삭제되었습니다',
  ...localeSettings,
  ...localeLogin,
  ...localeWorkplace,
  ...localeLogLogin,
  ...localeSysMenu,
  ...localeIconPicker,
  ...localeLogOpera,
  ...localeSysDept,
  ...localeSysApi,
  ...localeServerMonitor,
  ...localeRedisMonitor,
  ...localeSysUser,
  ...localeSysRole,
};
