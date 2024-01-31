import localeLogin from '@/views/login/locale/ko-KR';
import localeSysMenu from '@/views/admin/menu/locale/ko-KR';
import localeWorkplace from '@/views/dashboard/workplace/locale/ko-KR';
import localeLogLogin from '@/views/log/login/locale/ko-KR';
import localeIconPicker from '@/components/icon-picker/locale/ko-KR';
import localeLogOpera from '@/views/log/opera/locale/ko-KR';
import localeSysDept from '@/views/admin/dept/locale/ko-KR';
import localeSysApi from '@/views/admin/api/locale/ko-KR';
import localeServerMonitor from '@/views/monitor/server/locale/ko-KR';
import localeRedisMonitor from '@/views/monitor/redis/locale/ko-KR';
import localeSysUser from '@/views/admin/user/locale/ko-KR';
import localeSysRole from '@/views/admin/role/locale/ko-KR';
import localeSettings from './ko-KR/settings';

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
