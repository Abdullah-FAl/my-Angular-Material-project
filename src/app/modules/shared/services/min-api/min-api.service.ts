
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class MinApiService {


  ApiURL:string ;
	constructor(private client:HttpClient){}
	/**
	* تسجيل خروج المستخدم الحالي
	*/
	Logout_public():Observable<Logout>
	{
		return  this.client.get<Logout>(
			this.ApiURL + 'public/logout.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* تسجيل دخول
	*/
	Login_public(form:FormData):Observable<Login>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<Login>(
			this.ApiURL + 'public/login.php',
			form,
			httpOptions
		);
	}
	/**
	* عرض بيانات المستخدم الحالي
	*/
	CurrentUserInformation_Public():Observable<CurrentUserInformation>
	{
		return  this.client.get<CurrentUserInformation>(
			this.ApiURL + 'public/currentuserinformation.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة المستخدمين
	*/
	AdminList_Admin():Observable<AdminList>
	{
		return  this.client.get<AdminList>(
			this.ApiURL + 'admin/adminlist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* إضافة مستخدم جديد
	*/
	AdminAdd_Admin(form:FormData):Observable<AdminAdd>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<AdminAdd>(
			this.ApiURL + 'admin/adminadd.php',
			form,
			httpOptions
		);
	}
	/**
	* تعديل بيانات مستخدم
	*/
	AdminEdit_Admin(form:FormData):Observable<AdminEdit>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<AdminEdit>(
			this.ApiURL + 'admin/adminedit.php',
			form,
			httpOptions
		);
	}
	/**
	* حذف مستخدم
	*/
	AdminDelete_Admin(id):Observable<AdminDelete>
	{
		return  this.client.get<AdminDelete>(
			this.ApiURL + 'admin/admindelete.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* حذف مستخدم
	*/
	AdminDelete_Admin_Object(DataObject):Observable<AdminDelete>
	{
		return  this.client.get<AdminDelete>(
			this.ApiURL + 'admin/admindelete.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* عرض بيانات مستخدم
	*/
	AdminRead_Admin(id):Observable<AdminRead>
	{
		return  this.client.get<AdminRead>(
			this.ApiURL + 'admin/adminread.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* عرض بيانات مستخدم
	*/
	AdminRead_Admin_Object(DataObject):Observable<AdminRead>
	{
		return  this.client.get<AdminRead>(
			this.ApiURL + 'admin/adminread.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* مع بيانات المشارك الحالي من نوع مدير موقع مع الحقول الإضافية
	*/
	CurrentParticipantRead_Admin():Observable<CurrentParticipantRead>
	{
		return  this.client.get<CurrentParticipantRead>(
			this.ApiURL + 'admin/currentparticipantread.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة المشاركين
	*/
	ParticipantList_Participant():Observable<ParticipantList>
	{
		return  this.client.get<ParticipantList>(
			this.ApiURL + 'participant/participantlist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* إضافة مشارك
	*/
	ParticipantAdd_Participant(form:FormData):Observable<ParticipantAdd>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<ParticipantAdd>(
			this.ApiURL + 'participant/participantadd.php',
			form,
			httpOptions
		);
	}
	/**
	* تعديل بيانات مشارك
	*/
	ParticipantEdit_Participant(form:FormData):Observable<ParticipantEdit>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<ParticipantEdit>(
			this.ApiURL + 'participant/participantedit.php',
			form,
			httpOptions
		);
	}
	/**
	* حذف مشارك
	*/
	ParticipantDelete_Participant(id):Observable<ParticipantDelete>
	{
		return  this.client.get<ParticipantDelete>(
			this.ApiURL + 'participant/participantdelete.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* حذف مشارك
	*/
	ParticipantDelete_Participant_Object(DataObject):Observable<ParticipantDelete>
	{
		return  this.client.get<ParticipantDelete>(
			this.ApiURL + 'participant/participantdelete.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* عرض بيانات مشارك
	*/
	ParticipantRead_Participant(id):Observable<ParticipantRead>
	{
		return  this.client.get<ParticipantRead>(
			this.ApiURL + 'participant/participantread.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* عرض بيانات مشارك
	*/
	ParticipantRead_Participant_Object(DataObject):Observable<ParticipantRead>
	{
		return  this.client.get<ParticipantRead>(
			this.ApiURL + 'participant/participantread.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* بيانات المشارك الحالي
	*/
	CurrentParticipantRead_Participant():Observable<CurrentParticipantRead>
	{
		return  this.client.get<CurrentParticipantRead>(
			this.ApiURL + 'participant/currentparticipantread.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض إعدادات الموقع
	*/
	SettingView_Public():Observable<SettingView>
	{
		return  this.client.get<SettingView>(
			this.ApiURL + 'public/settingview.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* تحديث إعدادات الموقع
	*/
	SettingEdit_Admin(form:FormData):Observable<SettingEdit>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<SettingEdit>(
			this.ApiURL + 'admin/settingedit.php',
			form,
			httpOptions
		);
	}
	/**
	* عرض قائمة الإدارات
	*/
	DepartmentList_Department():Observable<DepartmentList>
	{
		return  this.client.get<DepartmentList>(
			this.ApiURL + 'department/departmentlist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض الإدارة بالرقم
	*/
	SelectDepartmentByID_Department(id):Observable<SelectDepartmentByID>
	{
		return  this.client.get<SelectDepartmentByID>(
			this.ApiURL + 'department/selectdepartmentbyid.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* عرض الإدارة بالرقم
	*/
	SelectDepartmentByID_Department_Object(DataObject):Observable<SelectDepartmentByID>
	{
		return  this.client.get<SelectDepartmentByID>(
			this.ApiURL + 'department/selectdepartmentbyid.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* إضافة إدارة جديدة
	*/
	DepartmentAdd_Department(form:FormData):Observable<DepartmentAdd>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<DepartmentAdd>(
			this.ApiURL + 'department/departmentadd.php',
			form,
			httpOptions
		);
	}
	/**
	* تحديث اسم إدارة
	*/
	DepartmentEdit_Department(form:FormData):Observable<DepartmentEdit>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<DepartmentEdit>(
			this.ApiURL + 'department/departmentedit.php',
			form,
			httpOptions
		);
	}
	/**
	* حذف إدارة
	*/
	DepartmentDelete_Department(id):Observable<DepartmentDelete>
	{
		return  this.client.get<DepartmentDelete>(
			this.ApiURL + 'department/departmentdelete.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* حذف إدارة
	*/
	DepartmentDelete_Department_Object(DataObject):Observable<DepartmentDelete>
	{
		return  this.client.get<DepartmentDelete>(
			this.ApiURL + 'department/departmentdelete.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* قائمة الإجراءات على القاعدة
	*/
	RuleActionQueryList_RuleAction():Observable<RuleActionQueryList>
	{
		return  this.client.get<RuleActionQueryList>(
			this.ApiURL + 'ruleaction/ruleactionquerylist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة أنواع الوثائق حسب الإدارة
	*/
	DocumentTypeByDepartmentList_DocumentType(id):Observable<DocumentTypeByDepartmentList>
	{
		return  this.client.get<DocumentTypeByDepartmentList>(
			this.ApiURL + 'documenttype/documenttypebydepartmentlist.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة أنواع الوثائق حسب الإدارة
	*/
	DocumentTypeByDepartmentList_DocumentType_Object(DataObject):Observable<DocumentTypeByDepartmentList>
	{
		return  this.client.get<DocumentTypeByDepartmentList>(
			this.ApiURL + 'documenttype/documenttypebydepartmentlist.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة أنواع الوثائق
	*/
	DocumentTypeList_DocumentType():Observable<DocumentTypeList>
	{
		return  this.client.get<DocumentTypeList>(
			this.ApiURL + 'documenttype/documenttypelist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض نوع الوثيقة
	*/
	DocumentTypeByID_DocumentType(id):Observable<DocumentTypeByID>
	{
		return  this.client.get<DocumentTypeByID>(
			this.ApiURL + 'documenttype/documenttypebyid.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* عرض نوع الوثيقة
	*/
	DocumentTypeByID_DocumentType_Object(DataObject):Observable<DocumentTypeByID>
	{
		return  this.client.get<DocumentTypeByID>(
			this.ApiURL + 'documenttype/documenttypebyid.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* إضافة نوع وثيقة
	*/
	DocumentTypeAdd_DocumentType(form:FormData):Observable<DocumentTypeAdd>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<DocumentTypeAdd>(
			this.ApiURL + 'documenttype/documenttypeadd.php',
			form,
			httpOptions
		);
	}
	/**
	* تعديل نوع وثيقة
	*/
	DocumentTypeEdit_DocumentType(form:FormData):Observable<DocumentTypeEdit>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<DocumentTypeEdit>(
			this.ApiURL + 'documenttype/documenttypeedit.php',
			form,
			httpOptions
		);
	}
	/**
	* حذف نوع وثيقة
	*/
	DocumentTypeDelete_DocumentType(id):Observable<DocumentTypeDelete>
	{
		return  this.client.get<DocumentTypeDelete>(
			this.ApiURL + 'documenttype/documenttypedelete.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* حذف نوع وثيقة
	*/
	DocumentTypeDelete_DocumentType_Object(DataObject):Observable<DocumentTypeDelete>
	{
		return  this.client.get<DocumentTypeDelete>(
			this.ApiURL + 'documenttype/documenttypedelete.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة القواعد
	*/
	RuleList_Rule():Observable<RuleList>
	{
		return  this.client.get<RuleList>(
			this.ApiURL + 'rule/rulelist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض القاعدة
	*/
	RuleByID_Rule(id):Observable<RuleByID>
	{
		return  this.client.get<RuleByID>(
			this.ApiURL + 'rule/rulebyid.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* عرض القاعدة
	*/
	RuleByID_Rule_Object(DataObject):Observable<RuleByID>
	{
		return  this.client.get<RuleByID>(
			this.ApiURL + 'rule/rulebyid.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* إضافة قاعدة جديدة
	*/
	RuleAdd_Rule(form:FormData):Observable<RuleAdd>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<RuleAdd>(
			this.ApiURL + 'rule/ruleadd.php',
			form,
			httpOptions
		);
	}
	/**
	* تحديث قاعدة
	*/
	RuleEdit_Rule(form:FormData):Observable<RuleEdit>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<RuleEdit>(
			this.ApiURL + 'rule/ruleedit.php',
			form,
			httpOptions
		);
	}
	/**
	* حذف قاعدة
	*/
	RuleDelete_Rule(id):Observable<RuleDelete>
	{
		return  this.client.get<RuleDelete>(
			this.ApiURL + 'rule/ruledelete.php' ,
			{
				params:{id:id},
				withCredentials: true
			}
		);
	}
	/**
	* حذف قاعدة
	*/
	RuleDelete_Rule_Object(DataObject):Observable<RuleDelete>
	{
		return  this.client.get<RuleDelete>(
			this.ApiURL + 'rule/ruledelete.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* عرض قائمة أنواع حفظ الوثيقة
	*/
	SaveTypeList_DocumentTypePoll():Observable<SaveTypeList>
	{
		return  this.client.get<SaveTypeList>(
			this.ApiURL + 'documenttypepoll/savetypelist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* تصويت المستخدم الحالي على نوع الوثيقة
	*/
	DocumentTypePollVote_DocumentTypePoll(form:FormData):Observable<DocumentTypePollVote>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<DocumentTypePollVote>(
			this.ApiURL + 'documenttypepoll/documenttypepollvote.php',
			form,
			httpOptions
		);
	}
	/**
	* عرض قائمة استبيانات وثائق المستخدم الحالي
	*/
	MyDocumentTypePollList_DocumentTypePoll():Observable<MyDocumentTypePollList>
	{
		return  this.client.get<MyDocumentTypePollList>(
			this.ApiURL + 'documenttypepoll/mydocumenttypepolllist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض الوثقائق الخاصة بإدارة المستخدم الحالي
	*/
	MyDocumentList_DocumentTypePoll():Observable<MyDocumentList>
	{
		return  this.client.get<MyDocumentList>(
			this.ApiURL + 'documenttypepoll/mydocumentlist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* عرض استبيانات القواعد الخاصة بالمستخدم الحالي
	*/
	MyRulePollList_Rule():Observable<MyRulePollList>
	{
		return  this.client.get<MyRulePollList>(
			this.ApiURL + 'rule/myrulepolllist.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* تصويت لحذف أو تعديل أو الإبقاء على قاعدة
	*/
	RulePollVote_RulePoll(form:FormData):Observable<RulePollVote>
	{
		let options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')};
		const httpOptions = { options,withCredentials:true };
		return  this.client.post<RulePollVote>(
			this.ApiURL + 'rulepoll/rulepollvote.php',
			form,
			httpOptions
		);
	}
	/**
	* تقرير  نتيجة الاستفتاء على القواعد
	*/
	RuleResult_Report():Observable<RuleResult>
	{
		return  this.client.get<RuleResult>(
			this.ApiURL + 'report/ruleresult.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* تقرير نتيجة استفتاء انواع الوثائق حسب الإدارة
	*/
	DocumentTypeResultByDepartment_Report(departmentid):Observable<DocumentTypeResultByDepartment>
	{
		return  this.client.get<DocumentTypeResultByDepartment>(
			this.ApiURL + 'report/documenttyperesultbydepartment.php' ,
			{
				params:{departmentid:departmentid},
				withCredentials: true
			}
		);
	}
	/**
	* تقرير نتيجة استفتاء انواع الوثائق حسب الإدارة
	*/
	DocumentTypeResultByDepartment_Report_Object(DataObject):Observable<DocumentTypeResultByDepartment>
	{
		return  this.client.get<DocumentTypeResultByDepartment>(
			this.ApiURL + 'report/documenttyperesultbydepartment.php' ,
			{
				params:DataObject,
				withCredentials: true
			}
		);
	}
	/**
	* تقرير القواعد التي تم طلب حذفها
	*/
	RuleDeleteRequest_Report():Observable<RuleDeleteRequest>
	{
		return  this.client.get<RuleDeleteRequest>(
			this.ApiURL + 'report/ruledeleterequest.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
	/**
	* تقرير القواعد التي تم طلب تعديلها
	*/
	RuleEditRequest_Report():Observable<RuleEditRequest>
	{
		return  this.client.get<RuleEditRequest>(
			this.ApiURL + 'report/ruleeditrequest.php' ,
			{
				params:{},
				withCredentials: true
			}
		);
	}
}
/* Processor Zone */
export interface Logout
{
	error:String;
	CurrentUserType: string;
	CurrentUserID: number;
	CurrentUsername: string;
	CurrentUserDescription: string;
	CurrentUserPrivileges:any;

}
export interface Login
{
	error:String;
	CurrentUserType: string;
	CurrentUserID: number;
	CurrentUsername: string;
	CurrentUserDescription: string;
	CurrentUserPrivileges:any;

}
export interface CurrentUserInformation
{
	error:String;
	CurrentUserType: string;
	CurrentUserID: number;
	CurrentUsername: string;
	CurrentUserDescription: string;
	CurrentUserPrivileges:any;

}
export interface AdminList
{
	error:String;

	AdminList:AdminListQuery[];
}
export interface AdminAdd
{
	error:String;

	UserAccountID:number;
}
export interface AdminEdit
{
	error:String;


}
export interface AdminDelete
{
	error:String;


}
export interface AdminRead
{
	error:String;

	Admin:any;
}
export interface CurrentParticipantRead
{
	error:String;

	Admin:any;
}
export interface ParticipantList
{
	error:String;

	ParticipantList:ParticipantListQuery[];
}
export interface ParticipantAdd
{
	error:String;

	UserAccountID:number;
}
export interface ParticipantEdit
{
	error:String;


}
export interface ParticipantDelete
{
	error:String;


}
export interface ParticipantRead
{
	error:String;

	Participant:any;
}
export interface CurrentParticipantRead
{
	error:String;

	Participant:any;
}
export interface SettingView
{
	error:String;

	SettingViewQuery:SettingViewQuery;
}
export interface SettingEdit
{
	error:String;


}
export interface DepartmentList
{
	error:String;

	DepartmentList:DepartmentQuery[];
}
export interface SelectDepartmentByID
{
	error:String;

	Department:SelectDepartmentByIDQuery;
}
export interface DepartmentAdd
{
	error:String;

	DepartmentID:number;
}
export interface DepartmentEdit
{
	error:String;


}
export interface DepartmentDelete
{
	error:String;


}
export interface RuleActionQueryList
{
	error:String;

	RuleActions:RuleActionQuery[];
}
export interface DocumentTypeByDepartmentList
{
	error:String;

	DocumentTypeList:DocumentTypeByDepartmentQuery[];
}
export interface DocumentTypeList
{
	error:String;

	DocumentTypeList:DocumentTypeQuery[];
}
export interface DocumentTypeByID
{
	error:String;

	DocumentType:DocumentTypeByIDQuery;
}
export interface DocumentTypeAdd
{
	error:String;

	DocumentTypeID:number;
}
export interface DocumentTypeEdit
{
	error:String;


}
export interface DocumentTypeDelete
{
	error:String;


}
export interface RuleList
{
	error:String;

	RuleList:RuleQuery[];
}
export interface RuleByID
{
	error:String;

	Rule:RuleByIDQuery;
}
export interface RuleAdd
{
	error:String;

	RuleID:number;
}
export interface RuleEdit
{
	error:String;


}
export interface RuleDelete
{
	error:String;


}
export interface SaveTypeList
{
	error:String;

	SaveTypeList:SaveTypeListQuery[];
}
export interface DocumentTypePollVote
{
	error:String;

	DocumentTypePollID:number;
}
export interface MyDocumentTypePollList
{
	error:String;

	ResponsedTotalCount:number;
	DocumentTypePollList:MyDocumentTypePollListQuery[];
}
export interface MyDocumentList
{
	error:String;

	DocumentList:MyDocumentListQuery[];
}
export interface MyRulePollList
{
	error:String;

	RulePollList:RulePollListQuery[];
}
export interface RulePollVote
{
	error:String;

	RulePollID:number;
}
export interface RuleResult
{
	error:String;

	RuleResult:RuleResultQuery[];
}
export interface DocumentTypeResultByDepartment
{
	error:String;

	Department:SelectDepartmentByIDQuery;
	DocumentTypeResult:DocumentTypeResultByDepartmentQuery[];
}
export interface RuleDeleteRequest
{
	error:String;

	RuleDeleteRequestList:RuleDeleteRequestQuery[];
}
export interface RuleEditRequest
{
	error:String;

	RuleEditRequestList:RuleEditRequestQuery[];
}
/* Query Zone */
export interface AdminListQuery
{
	UserAccountID:string; //
	Username:string; //
	IsActive:string; //
}
export interface ParticipantListQuery
{
	UserAccountID:string; //
	Username:string; //
	IsActive:string; //
}
export interface SettingViewQuery
{
	SiteName:string; // اسم الموقع
	CustomerName:string; // الجهة
}
export interface DepartmentQuery
{
	DepartmentID:string; //
	DepartmentName:string; //
}
export interface SelectDepartmentByIDQuery
{
	DepartmentID:string; //
	DepartmentName:string; //
}
export interface RuleActionQuery
{
	RuleActionID:string; //
	RuleActionName:string; //
}
export interface DocumentTypeByDepartmentQuery
{
	DocumentTypeID:string; //
	DocumentTypeName:string; //
	DepartmentID:string; //
}
export interface DocumentTypeQuery
{
	DocumentTypeID:string; //
	DocumentTypeName:string; //
	DepartmentID:string; //
}
export interface DocumentTypeByIDQuery
{
	DocumentTypeID:string; //
	DocumentTypeName:string; //
	DepartmentID:string; //
}
export interface RuleQuery
{
	RuleID:string; //
	RuleName:string; //
}
export interface RuleByIDQuery
{
	RuleID:string; //
	RuleName:string; //
}
export interface SaveTypeListQuery
{
	SaveTypeID:string; //
	SaveTypeName:string; //
}
export interface MyDocumentTypePollListQuery
{
	DocumentTypePollID:string; //
	DocumentTypeID:string; //
	SaveTypeID:string; //
	SavePeriodInYears:string; //
	UserAccountID:string; //
}
export interface MyDocumentListQuery
{
	DocumentTypeID:string; //
	DocumentTypeName:string; //
}
export interface RulePollListQuery
{
	RulePollID:string; //
	RuleID:string; //
	RuleName:string; //
	RuleActionID:string; //
	RuleActionName:string; //
	EditCause:string; //
	DeleteCause:string; //
	UserAccountID:string; //
}
export interface RuleResultQuery
{
	RuleID:string; // رقم القاعدة
	RuleName:string; // اسم القاعدة
	SaveCount:string; // الأصوات المطالبة بالحفظ
	EditCount:string; // الأصوات المطالبة بالتعديل
	DeleteCount:string; // الأصوات المطالبة بالحذف
  TotalCount:number; // مجموع الأصوات
  TopCount?:number;
  TopCountText?:string;

}
export interface DocumentTypeResultByDepartmentQuery
{
	DocumentTypeID:string; // رقم الوثيقة
	DocumentTypeName:string; // نوع الوثيقة
	DoNotSaveCount:string; // عدم الحفظ
	PaperCount:string; // حفظ ورقيا
	PaperSaveAvgInYears:string; //
	DigitalCount:string; // حفظ إلكترونيا
	DigitalSaveAvgInYears:string; //
	PaparAndDigitalCount:string; // حفظ ورقي وإلكتروني
	PaparAndDigitalSaveAvgInYears:string; //
	TotalCount:number; // العدد الكلي
  AvgPeriodInYear:string; // متوسط سنوات الحفظ
  TopCount?:number;
  TopCountText?:string;
  TopAvgInYears?:string;
}
export interface RuleDeleteRequestQuery
{
	FullName:string; //
	JobTitle:string; //
	MobileNo:string; //
	Email:string; //
	Username:string; //
	DepartmentName:string; //
	RuleName:string; //
	DeleteCause:string; //
}
export interface RuleEditRequestQuery
{
	FullName:string; //
	JobTitle:string; //
	MobileNo:string; //
	Email:string; //
	Username:string; //
	DepartmentName:string; //
	RuleName:string; //
	EditCause:string; //
}
