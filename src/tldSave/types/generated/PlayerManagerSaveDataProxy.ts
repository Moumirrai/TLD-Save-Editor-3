import type VoicePersona from './enums/VoicePersona';
import type SerializableBounds from './SerializableBounds';

export default interface PlayerManagerSaveDataProxy {
  m_SaveGamePosition: [number, number, number];
  m_SaveGameRotation: [number, number, number, number];
  m_StartGearAppliedProxy: boolean;
  m_ItemInHandsInstanceID: number;
  m_LastUnequippedItemInstanceID: number;
  m_InRunMode: boolean;
  m_Ghost: boolean;
  m_God: boolean;
  m_CheatsUsed: boolean;
  m_VoicePersona: VoicePersona;
  m_CaloriesHarvestedToday: number;
  m_FreezingRateScale: number;
  m_FatigueRateScale: number;
  m_ConditonPercentBonus: number;
  m_FatigueBuffHoursRemaining: number;
  m_FatigueBuffHoursDuration: number;
  m_FreezingBuffHoursRemaining: number;
  m_FreezingBuffHoursDuration: number;
  m_ConditionRestBuffHoursRemaining: number;
  m_ConditionRestBuffHoursDuration: number;
  m_StartingRegionName: string;
  m_SelectedBlueprintItemIndexWorkbench: number;
  m_SelectedBlueprintItemIndexForge: number;
  m_PlayerInVehicle: boolean;
  m_PlayerInVehicleCameraPos: [number, number, number];
  m_PlayerInSnowShelter: boolean;
  m_PlayerInLeanTo: boolean;
  m_PumpkinPieBuffHoursRemaining: number;
  m_PumpkinPieBuffHoursDuration: number;
  m_PumpkinPieFreezingRateScale: number;
  /** @default {List<int>} */
  m_KnownCodes: number[];
  m_LimitCampfiresToBounds: SerializableBounds;
  m_StatusBarsLocked: boolean;
  m_ConditionPerHourBonus: number;
  m_ConditionPerHourHoursRemaining: number;
  m_ConditionPerHourHoursDuration: number;
  m_FatigueBuffCauseLocID: string;
  m_ForceAIFlee: boolean;
  m_SuspendConditionUpdate: boolean;
  m_ForceHideDiscoveryText: boolean;
  m_DisableAllSpeech: boolean;
  m_HasSavedItemInHands: boolean;
  m_RestoreSavedItemInHandsPending: boolean;
  m_HasEverSprayPainted: boolean;
}