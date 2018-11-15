/* eslint-disable */
"use strict"

const ApiDump = (() => {
	const Data = {
		Categories: [
			"Appearance","Behavior","Data","Derived Data","Shape","Goals","Thrust","Turn","Camera","Image","Attachments","Compliance","AlignOrientation","AlignPosition","BallSocket","Limits","TwistLimits","Hinge","Servo","Motor","Derived","LineForce","Rod","Rope","Slider","Cylinder","AngularLimits","AngularServo","AngularMotor","Spring","Torque","VectorForce","Localization","Text","Scrolling","State","Control","Game","Accessories","Scale","Animation","Body Parts","Clothes","Body Colors","Surface Inputs","Surface","Part ","Teams","Forcefield","Link","Motion","Particles","Emission","JobInfo","Input","Parts"
		],
		Enums: [
			["TextureMode",["Stretch","Wrap","Static"]],["CameraType",["Fixed","Attach","Watch","Track","Follow","Custom","Scriptable","Orbital"]],["BodyPart",["Head","Torso","LeftArm","RightArm","LeftLeg","RightLeg"]],["ActuatorType",["None","Motor","Servo"]],["ActuatorRelativeTo",["Attachment0","Attachment1","World"]],["MeshType",["Head","Torso","Wedge","Sphere","Cylinder","FileMesh","Brick","Prism","Pyramid","ParallelRamp","RightAngleRamp","CornerWedge"]],["DialogBehaviorType",["SinglePlayer","MultiplePlayers"]],["DialogPurpose",["Quest","Help","Shop"]],["DialogTone",["Neutral","Friendly","Enemy"]],["ExplosionType",["NoCraters","Craters","CratersAndDebris"]],["NormalId",["Right","Top","Back","Left","Bottom","Front"]],["InOut",["Edge","Inset","Center"]],["LeftRight",["Left","Center","Right"]],["TopBottom",["Top","Center","Bottom"]],["SizeConstraint",["RelativeXY","RelativeXX","RelativeYY"]],["FrameStyle",["Custom","ChatBlue","RobloxSquare","RobloxRound","ChatGreen","ChatRed","DropShadow"]],["ButtonStyle",["Custom","RobloxButtonDefault","RobloxButton","RobloxRoundButton","RobloxRoundDefaultButton","RobloxRoundDropdownButton"]],["ScaleType",["Stretch","Slice","Tile","Fit","Crop"]],["Font",["Legacy","Arial","ArialBold","SourceSans","SourceSansBold","SourceSansLight","SourceSansItalic","Bodoni","Garamond","Cartoon","Code","Highway","SciFi","Arcade","Fantasy","Antique","SourceSansSemibold"]],["FontSize",["Size8","Size9","Size10","Size11","Size12","Size14","Size18","Size24","Size36","Size48","Size28","Size32","Size42","Size60","Size96"]],["TextTruncate",["None","AtEnd"]],["TextXAlignment",["Left","Right","Center"]],["TextYAlignment",["Top","Center","Bottom"]],["ElasticBehavior",["WhenScrollable","Always","Never"]],["ScrollBarInset",["None","ScrollBar","Always"]],["ScrollingDirection",["X","Y",,"XY"]],["VerticalScrollBarPosition",["Right","Left"]],["ZIndexBehavior",["Global","Sibling"]],["HandlesStyle",["Resize","Movement"]],["BinType",["Script","GameTool","Grab","Clone","Hammer"]],["HumanoidDisplayDistanceType",["Viewer","Subject","None"]],["Material",{256:"Plastic",272:"SmoothPlastic",288:"Neon",512:"Wood",528:"WoodPlanks",784:"Marble",788:"Basalt",800:"Slate",804:"CrackedLava",816:"Concrete",820:"Limestone",832:"Granite",836:"Pavement",848:"Brick",864:"Pebble",880:"Cobblestone",896:"Rock",912:"Sandstone",1040:"CorrodedMetal",1056:"DiamondPlate",1072:"Foil",1088:"Metal",1280:"Grass",1284:"LeafyGrass",1296:"Sand",1312:"Fabric",1328:"Snow",1344:"Mud",1360:"Ground",1376:"Asphalt",1392:"Salt",1536:"Ice",1552:"Glacier",1568:"Glass",1792:"Air",2048:"Water"}],["HumanoidHealthDisplayType",["DisplayWhenDamaged","AlwaysOn","AlwaysOff"]],["NameOcclusion",["NoOcclusion","EnemyOcclusion","OccludeAll"]],["HumanoidRigType",["R6","R15"]],["AnimationPriority",{0:"Idle",1:"Movement",2:"Action",1000:"Core"}],["SurfaceType",["Smooth","Glue","Weld","Studs","Inlet","Universal","Hinge","Motor","SteppingMotor",,"SmoothNoOutlines"]],["InputType",{0:"NoInput",12:"Constant",13:"Sin"}],["FormFactor",["Symmetric","Brick","Plate","Custom"]],["PartType",["Ball","Block","Cylinder"]],["CollisionFidelity",["Default","Hull","Box"]],["RenderFidelity",["Automatic","Precise"]],["Style",["AlternatingSupports","BridgeStyleSupports","NoSupports"]],["PoseEasingDirection",["In","Out","InOut"]],["PoseEasingStyle",["Linear","Constant","Elastic","Cubic","Bounce"]],["CreatorType",["User","Group"]],["GearGenreSetting",["AllGenres","MatchingGenreOnly"]],["Genre",["All","TownAndCity","Fantasy","SciFi","Ninja","Scary","Pirate","Adventure","Sports","Funny","WildWest","War","SkatePark","Tutorial"]],["RollOffMode",["Inverse","Linear","LinearSquare","InverseTapered"]],["AspectType",["FitWithinMaxSize","ScaleWithParentSize"]],["DominantAxis",["Width","Height"]],["FillDirection",["Horizontal","Vertical"]],["HorizontalAlignment",["Center","Left","Right"]],["SortOrder",["Name","Custom","LayoutOrder"]],["VerticalAlignment",["Center","Top","Bottom"]],["StartCorner",["TopLeft","TopRight","BottomLeft","BottomRight"]],["EasingDirection",["In","Out","InOut"]],["EasingStyle",["Linear","Sine","Back","Quad","Quart","Quint","Bounce","Elastic"]],["TableMajorAxis",["RowMajor","ColumnMajor"]]
		],
		Classes: [
			["Instance",{Archivable:1,ClassName:2,DataCost:2,Name:2,Parent:2,RobloxLocked:2,className:2,ClassName:2,Archivable:1}],["Accoutrement",{AttachmentForward:0,AttachmentPoint:0,AttachmentPos:0,AttachmentRight:0,AttachmentUp:0},[20,32]],["Accessory",1,,[30,32]],["Hat",1,,[30,45]],["Animation",{AnimationId:2},[220,60]],["AnimationController",,[220,60]],["Attachment",{Axis:3,CFrame:2,Orientation:2,Position:2,Rotation:2,SecondaryAxis:3,Visible:0,WorldAxis:3,WorldCFrame:3,WorldOrientation:3,WorldPosition:3,WorldRotation:3,WorldSecondaryAxis:3},[30,81]],["Beam",{Attachment0:4,Attachment1:4,Color:0,CurveSize0:4,CurveSize1:4,Enabled:0,FaceCamera:4,LightEmission:0,LightInfluence:0,Segments:4,Texture:0,TextureLength:0,TextureMode:[],TextureSpeed:0,Transparency:0,Width0:4,Width1:4,ZOffset:0},[30,96]],["BindableEvent",,[50,67]],["BindableFunction",,[40,66]],["BodyAngularVelocity",{AngularVelocity:5,MaxTorque:5,P:5,angularvelocity:5,maxTorque:5},[140,14]],["BodyForce",{Force:5,force:5},[140,14]],["BodyGyro",{CFrame:5,D:5,MaxTorque:5,P:5,cframe:5,maxTorque:5},[140,14]],["BodyPosition",{D:5,MaxForce:5,P:5,Position:5,maxForce:5,position:5},[140,14]],["BodyThrust",{Force:5,Location:5,force:5,location:5},[140,14]],["BodyVelocity",{MaxForce:5,P:5,Velocity:5,maxForce:5,velocity:5},[140,14]],["RocketPropulsion",{CartoonFactor:5,MaxSpeed:6,MaxThrust:6,MaxTorque:7,Target:5,TargetOffset:5,TargetRadius:5,ThrustD:6,ThrustP:6,TurnD:7,TurnP:7},[140,14]],["Button",{ClickableWhenViewportHidden:0,Enabled:0,Icon:0}],["Camera",{CFrame:2,CameraSubject:8,CameraType:[8,1],FieldOfView:2,Focus:2,HeadLocked:2,HeadScale:2,NearPlaneZ:2,ViewportSize:2,focus:2},[5,5]],["BodyColors",{HeadColor:0,HeadColor3:0,LeftArmColor:0,LeftArmColor3:0,LeftLegColor:0,LeftLegColor3:0,RightArmColor:0,RightArmColor3:0,RightLegColor:0,RightLegColor3:0,TorsoColor:0,TorsoColor3:0},20],["CharacterMesh",{BaseTextureId:2,BodyPart:[2,2],MeshId:2,OverlayTextureId:2},[220,60]],["Clothing",,20],["Pants",21,{PantsTemplate:0},[20,44]],["Shirt",21,{ShirtTemplate:0},[20,43]],["ShirtGraphic",{Graphic:0},[20,40]],["Skin",{SkinColor:0},20],["ClickDetector",{CursorIcon:9,MaxActivationDistance:2},[30,41]],["Configuration",,[220,58]],["Constraint",{Active:1,Attachment0:10,Attachment1:10,Color:0,Enabled:1,Visible:0},[30,86]],["AlignOrientation",28,{MaxAngularVelocity:11,MaxTorque:11,PrimaryAxisOnly:12,ReactionTorqueEnabled:12,Responsiveness:11,RigidityEnabled:12},[30,82]],["AlignPosition",28,{ApplyAtCenterOfMass:13,MaxForce:11,MaxVelocity:11,ReactionForceEnabled:13,Responsiveness:11,RigidityEnabled:13},[30,82]],["BallSocketConstraint",28,{LimitsEnabled:14,Radius:0,Restitution:15,TwistLimitsEnabled:15,TwistLowerAngle:16,TwistUpperAngle:16,UpperAngle:15},[30,86]],["HingeConstraint",28,{ActuatorType:[17,3],AngularSpeed:18,AngularVelocity:19,CurrentAngle:20,LimitsEnabled:17,LowerAngle:15,MotorMaxAcceleration:19,MotorMaxTorque:19,Radius:0,Restitution:15,ServoMaxTorque:18,TargetAngle:18,UpperAngle:15},[30,87]],["LineForce",28,{ApplyAtCenterOfMass:21,InverseSquareLaw:21,Magnitude:21,MaxForce:21,ReactionForceEnabled:21},[30,82]],["RodConstraint",28,{CurrentDistance:20,Length:22,Thickness:0},[30,90]],["RopeConstraint",28,{CurrentDistance:20,Length:23,Restitution:23,Thickness:0},[30,89]],["SlidingBallConstraint",28,{ActuatorType:[24,3],CurrentPosition:20,LimitsEnabled:24,LowerLimit:15,MotorMaxAcceleration:19,MotorMaxForce:19,Restitution:15,ServoMaxForce:18,Size:0,Speed:18,TargetPosition:18,UpperLimit:15,Velocity:19},[30,88]],["CylindricalConstraint",36,{AngularActuatorType:[25,3],AngularLimitsEnabled:25,AngularRestitution:26,AngularSpeed:27,AngularVelocity:28,CurrentAngle:20,InclinationAngle:25,LowerAngle:26,MotorMaxAngularAcceleration:28,MotorMaxTorque:28,RotationAxisVisible:0,ServoMaxTorque:27,TargetAngle:27,UpperAngle:26,WorldRotationAxis:20},[30,95]],["PrismaticConstraint",36,,[30,88]],["SpringConstraint",28,{Coils:0,CurrentLength:20,Damping:29,FreeLength:29,LimitsEnabled:29,MaxForce:29,MaxLength:15,MinLength:15,Radius:0,Stiffness:29,Thickness:0},[30,91]],["Torque",28,{RelativeTo:[30,4],Torque:30},[30,82]],["VectorForce",28,{ApplyAtCenterOfMass:31,Force:31,RelativeTo:[31,4]},[30,82]],["CustomEvent",,[30,4]],["CustomEventReceiver",{Source:2},[30,4]],["DataModelMesh",{Offset:2,Scale:2,VertexColor:2}],["BevelMesh",44],["BlockMesh",44,,[30,8]],["CylinderMesh",44,,[30,8]],["FileMesh",44,{MeshId:2,TextureId:2}],["SpecialMesh",48,{MeshType:[2,5]},[30,8]],["Dialog",{BehaviorType:[2,6],ConversationDistance:2,GoodbyeChoiceActive:2,GoodbyeDialog:2,InUse:2,InitialPrompt:2,Purpose:[2,7],Tone:[2,8],TriggerDistance:2,TriggerOffset:2},[220,62]],["DialogChoice",{GoodbyeChoiceActive:2,GoodbyeDialog:2,ResponseDialog:2,UserDialog:2},[220,63]],["Explosion",{BlastPressure:2,BlastRadius:2,DestroyJointRadiusPercent:2,ExplosionType:[2,9],Position:2,Visible:2},[30,36]],["FaceInstance",{Face:[2,10]}],["Decal",53,{Color3:0,Shiny:0,Specular:0,Texture:0,Transparency:0},[40,7]],["Texture",54,{StudsPerTileU:0,StudsPerTileV:0},[40,10]],["Feature",{FaceId:[2,10],InOut:[2,11],LeftRight:[2,12],TopBottom:[2,13]},20],["Hole",56,,20],["MotorFeature",56],["Fire",{Color:2,Enabled:2,Heat:2,SecondaryColor:2,Size:2,size:2},[30,61]],["Folder",,[10,77]],["ForceField",{Visible:2},[30,37]],["GuiBase2d",{AbsolutePosition:2,AbsoluteRotation:2,AbsoluteSize:2,AutoLocalize:32,RootLocalizationTable:32}],["GuiObject",62,{Active:2,AnchorPoint:2,BackgroundColor3:2,BackgroundTransparency:2,BorderColor3:2,BorderSizePixel:2,ClipsDescendants:1,Draggable:1,LayoutOrder:2,NextSelectionDown:1,NextSelectionLeft:1,NextSelectionRight:1,NextSelectionUp:1,Position:2,Rotation:2,Selectable:2,SelectionImageObject:0,Size:2,SizeConstraint:[2,14],Visible:2,ZIndex:2}],["Frame",63,{Style:[2,15]},[150,48]],["GuiButton",63,{AutoButtonColor:2,Modal:2,Selected:2,Style:[2,16]},[160,52]],["ImageButton",65,{HoverImage:9,Image:9,ImageColor3:9,ImageRectOffset:9,ImageRectSize:9,ImageTransparency:9,IsLoaded:9,PressedImage:9,ScaleType:[9,17],SliceCenter:9,TileSize:9},[160,52]],["TextButton",65,{Font:[33,18],FontSize:[33,19],LineHeight:33,Text:33,TextBounds:33,TextColor3:33,TextFits:33,TextScaled:33,TextSize:33,TextStrokeColor3:33,TextStrokeTransparency:33,TextTransparency:33,TextTruncate:[33,20],TextWrap:33,TextWrapped:33,TextXAlignment:[33,21],TextYAlignment:[33,22]},[170,51]],["GuiLabel",63],["ImageLabel",63,{Image:9,ImageColor3:9,ImageRectOffset:9,ImageRectSize:9,ImageTransparency:9,IsLoaded:9,ScaleType:[9,17],SliceCenter:9,TileSize:9},[180,49]],["TextLabel",63,{Font:[33,18],FontSize:[33,19],LineHeight:33,Text:33,TextBounds:33,TextColor3:33,TextFits:33,TextScaled:33,TextSize:33,TextStrokeColor3:33,TextStrokeTransparency:33,TextTransparency:33,TextTruncate:[33,20],TextWrap:33,TextWrapped:33,TextXAlignment:[33,21],TextYAlignment:[33,22]},[190,50]],["ScrollingFrame",63,{AbsoluteWindowSize:34,BottomImage:34,CanvasPosition:34,CanvasSize:34,ElasticBehavior:[34,23],HorizontalScrollBarInset:[34,24],MidImage:34,ScrollBarImageColor3:34,ScrollBarImageTransparency:34,ScrollBarThickness:34,ScrollingDirection:[34,25],ScrollingEnabled:34,TopImage:34,VerticalScrollBarInset:[34,24],VerticalScrollBarPosition:[34,26]},[150,48]],["TextBox",63,{ClearTextOnFocus:2,CursorPosition:2,Font:[33,18],FontSize:[33,19],LineHeight:33,ManualFocusRelease:2,MultiLine:2,OverlayNativeInput:2,PlaceholderColor3:33,PlaceholderText:33,ShowNativeInput:2,Text:33,TextBounds:33,TextColor3:33,TextFits:33,TextScaled:33,TextSize:33,TextStrokeColor3:33,TextStrokeTransparency:33,TextTransparency:33,TextTruncate:[33,20],TextWrap:33,TextWrapped:33,TextXAlignment:[33,21],TextYAlignment:[33,22]},[170,51]],["ViewportFrame",63,{CurrentCamera:2},[30,52]],["LayerCollector",62,{Enabled:2,ResetOnSpawn:2,ZIndexBehavior:[2,27]}],["BillboardGui",74,{Active:2,Adornee:2,AlwaysOnTop:2,ClipsDescendants:1,ExtentsOffset:2,ExtentsOffsetWorldSpace:2,LightInfluence:2,MaxDistance:2,PlayerToHideFrom:2,Size:2,SizeOffset:2,StudsOffset:2,StudsOffsetWorldSpace:2},[140,64]],["ScreenGui",74,{DisplayOrder:2,IgnoreGuiInset:2},[140,47]],["GuiMain",76,,[140,47]],["SurfaceGui",74,{Active:2,Adornee:2,AlwaysOnTop:2,CanvasSize:2,ClipsDescendants:1,Face:[2,10],LightInfluence:2,ToolPunchThroughDistance:2,ZOffset:0},[140,64]],["GuiBase3d",{Color3:0,Transparency:0,Visible:2}],["FloorWire",79,{CycleOffset:2,From:2,StudsBetweenTextures:2,Texture:0,TextureSize:0,To:2,Velocity:2,WireRadius:2},[30,4]],["PVAdornment",79,{Adornee:2}],["HandleAdornment",81,{AlwaysOnTop:2,CFrame:2,SizeRelativeOffset:2,ZIndex:2}],["BoxHandleAdornment",82,{Size:2}],["ConeHandleAdornment",82,{Height:2,Radius:2}],["CylinderHandleAdornment",82,{Height:2,Radius:2}],["ImageHandleAdornment",82,{Image:2,Size:2}],["LineHandleAdornment",82,{Length:2,Thickness:2}],["SphereHandleAdornment",82,{Radius:2}],["ParabolaAdornment",81,{A:2,B:2,C:2,Range:2,Thickness:2}],["SelectionBox",81,{LineThickness:0,SurfaceColor3:0,SurfaceTransparency:0},[210,54]],["SelectionSphere",81,{SurfaceColor3:0,SurfaceTransparency:0},[210,54]],["PartAdornment",79,{Adornee:2}],["HandlesBase",92],["ArcHandles",92,{Axes:2},[200,56]],["Handles",92,{Faces:2,Style:[,28]},[190,53]],["SurfaceSelection",92,{TargetSurface:[2,10]},[210,55]],["SelectionLasso",79,{Humanoid:2}],["SelectionPartLasso",97,{Part:2},[220,57]],["SelectionPointLasso",97,{Point:2},[220,57]],["Backpack",,[30,20]],["BackpackItem",{TextureId:2},20],["HopperBin",101,{Active:2,BinType:[2,29]},[240,22]],["Tool",101,{CanBeDropped:1,Enabled:35,Grip:0,GripForward:0,GripPos:0,GripRight:0,GripUp:0,ManualActivationOnly:1,RequiresHandle:1,ToolTip:0},[30,17]],["Flag",103,{TeamColor:2},[30,38]],["Humanoid",{AutoJumpEnabled:36,AutoRotate:36,AutomaticScalingEnabled:37,CameraOffset:2,DisplayDistanceType:[2,30],FloorMaterial:[36,31],Health:37,HealthDisplayDistance:2,HealthDisplayType:[2,32],HipHeight:37,Jump:36,JumpPower:37,MaxHealth:37,MaxSlopeAngle:37,MoveDirection:36,NameDisplayDistance:2,NameOcclusion:[2,33],PlatformStand:36,RigType:[2,34],RootPart:2,SeatPart:36,Sit:36,TargetPoint:36,WalkSpeed:37,WalkToPart:36,WalkToPoint:36,maxHealth:37},[30,9]],["HumanoidDescription",{BackAccessory:38,BodyTypeScale:39,ClimbAnimation:40,DepthScale:39,Face:41,FaceAccessory:38,FallAnimation:40,FrontAccessory:38,GraphicTShirt:42,HairAccessory:38,HatAccessory:38,Head:41,HeadColor:43,HeadScale:39,HeightScale:39,IdleAnimation:40,JumpAnimation:40,LeftArm:41,LeftArmColor:43,LeftLeg:41,LeftLegColor:43,NeckAccessory:38,Pants:42,ProportionScale:39,RightArm:41,RightArmColor:43,RightLeg:41,RightLegColor:43,RunAnimation:40,Shirt:42,ShouldersAccessory:38,SwimAnimation:40,Torso:41,TorsoColor:43,WaistAccessory:38,WalkAnimation:40,WidthScale:39},[22,58]],["JointInstance",{Active:1,C0:2,C1:2,Part0:2,Part1:2},[200,34]],["DynamicRotate",107,{BaseAngle:2}],["RotateP",108],["RotateV",108],["Glue",107,{F0:2,F1:2,F2:2,F3:2}],["ManualSurfaceJointInstance",107],["ManualGlue",107],["ManualWeld",107],["Motor",107,{CurrentAngle:2,DesiredAngle:2,MaxVelocity:2},20],["Motor6D",115],["Rotate",107],["Snap",107,,[200,34]],["VelocityMotor",107,{CurrentAngle:2,DesiredAngle:2,Hole:2,MaxVelocity:2}],["Weld",107,,[200,34]],["Keyframe",{Time:2},[220,60]],["KeyframeSequence",{Loop:2,Priority:[2,35]}],["Light",{Brightness:0,Color:0,Enabled:0,Shadows:0},[30,13]],["PointLight",123,{Range:0},[30,13]],["SpotLight",123,{Angle:0,Face:[,10],Range:0},[30,13]],["SurfaceLight",123,{Angle:0,Face:[,10],Range:0},[30,13]],["LocalizationTable",{SourceLocaleId:32},[30,97]],["LuaSourceContainer",{CurrentEditor:2}],["BaseScript",128,{Disabled:1,LinkedSource:2}],["CoreScript",129],["Script",129,{Source:2},[30,6]],["LocalScript",131,,[40,18]],["ModuleScript",128,{LinkedSource:2,Source:2},[50,76]],["Message",{Text:0},[110,33]],["Hint",134,,[110,33]],["BasePart",{Anchored:1,BackParamA:44,BackParamB:44,BackSurface:[45,36],BackSurfaceInput:[44,37],BottomParamA:44,BottomParamB:44,BottomSurface:[45,36],BottomSurfaceInput:[44,37],BrickColor:0,CFrame:2,CanCollide:1,CenterOfMass:2,CollisionGroupId:1,Color:0,CustomPhysicalProperties:46,FrontParamA:44,FrontParamB:44,FrontSurface:[45,36],FrontSurfaceInput:[44,37],LeftParamA:44,LeftParamB:44,LeftSurface:[45,36],LeftSurfaceInput:[44,37],Locked:1,Massless:1,Material:[,31],Orientation:2,Position:2,Reflectance:0,ResizeIncrement:1,ResizeableFaces:1,RightParamA:44,RightParamB:44,RightSurface:[45,36],RightSurfaceInput:[44,37],RootPriority:46,RotVelocity:2,Rotation:2,Size:46,SpecificGravity:2,TopParamA:44,TopParamB:44,TopSurface:[45,36],TopSurfaceInput:[44,37],Transparency:0,Velocity:2,brickColor:0},3],["CornerWedgePart",136,,[120,1]],["FormFactorPart",136,{FormFactor:[46,38]}],["Part",138,{Shape:[46,39]},[110,1]],["FlagStand",139,{TeamColor:2},[30,39]],["Platform",139,,[30,35]],["Seat",139,{Disabled:36,Occupant:36},[30,35]],["SkateboardPlatform",139,{Controller:36,ControllingHumanoid:36,Steer:36,StickyWheels:36,Throttle:36},[30,35]],["SpawnLocation",139,{AllowTeamChangeOnTouch:47,Duration:48,Enabled:1,Neutral:47,TeamColor:47},[30,25]],["WedgePart",138,,[120,1]],["MeshPart",136,{CollisionFidelity:[1,40],MeshID:0,MeshId:0,TextureID:0},[20,73]],["PartOperation",136,{CollisionFidelity:[1,40],RenderFidelity:[1,41],TriangleCount:2,UsePartColor:2}],["NegateOperation",147,,[20,72]],["UnionOperation",147,,[20,73]],["Terrain",136,{IsSmooth:2,MaterialColors:0,MaxExtents:2,WaterColor:0,WaterReflectance:0,WaterTransparency:0,WaterWaveSize:0,WaterWaveSpeed:0},[5,65]],["TrussPart",136,{Style:[46,42]},[120,1]],["VehicleSeat",136,{AreHingesDetected:36,Disabled:36,HeadsUpDisplay:36,MaxSpeed:36,Occupant:36,Steer:36,SteerFloat:36,Throttle:36,ThrottleFloat:36,Torque:36,TurnSpeed:36},[30,35]],["Model",{PrimaryPart:2},[100,2]],["Status",153,,[100,2]],["PackageLink",{PackageId:49,Status:49,VersionNumber:49},[1,98]],["ParticleEmitter",{Acceleration:50,Color:0,Drag:51,EmissionDirection:[52,10],Enabled:52,Lifetime:52,LightEmission:0,LightInfluence:0,LockedToPart:51,Rate:52,RotSpeed:52,Rotation:52,Size:0,Speed:52,SpreadAngle:52,Texture:0,Transparency:0,VelocityInheritance:51,VelocitySpread:52,ZOffset:0},[30,80]],["PlayerScripts",,[130,78]],["Pose",{CFrame:2,EasingDirection:[2,43],EasingStyle:[2,44],MaskWeight:2,Weight:2},[220,60]],["PostEffect",{Enabled:35}],["BloomEffect",159,{Intensity:35,Size:35,Threshold:35},[20,83]],["BlurEffect",159,{Size:35},[20,83]],["ColorCorrectionEffect",159,{Brightness:35,Contrast:35,Saturation:35,TintColor:35},[20,83]],["SunRaysEffect",159,{Intensity:35,Spread:35},[20,83]],["RemoteEvent",,[50,75]],["RemoteFunction",,[40,74]],["DataModel",{CreatorId:35,CreatorType:[35,45],GameId:35,GearGenreSetting:[35,46],Genre:[35,47],IsSFFlagsLoaded:2,JobId:53,PlaceId:35,PlaceVersion:35,PrivateServerId:2,PrivateServerOwnerId:2,Workspace:2,lighting:2,workspace:2}],["Sky",{CelestialBodiesShown:0,MoonAngularSize:0,MoonTextureId:0,SkyboxBk:0,SkyboxDn:0,SkyboxFt:0,SkyboxLf:0,SkyboxRt:0,SkyboxUp:0,StarCount:0,SunAngularSize:0,SunTextureId:0},[5,28]],["Smoke",{Color:2,Enabled:2,Opacity:2,RiseVelocity:2,Size:2},[30,59]],["Sound",{EmitterSize:2,IsLoaded:2,IsPaused:2,IsPlaying:2,Looped:2,MaxDistance:2,MinDistance:2,Pitch:2,PlayOnRemove:1,PlaybackLoudness:2,PlaybackSpeed:2,Playing:2,RollOffMode:[2,48],SoundGroup:2,SoundId:2,TimeLength:2,TimePosition:2,Volume:2,isPlaying:2},[10,11]],["SoundEffect",{Enabled:35,Priority:35}],["ChorusSoundEffect",170,{Depth:35,Mix:35,Rate:35},[20,84]],["CompressorSoundEffect",170,{Attack:35,GainMakeup:35,Ratio:35,Release:35,SideChain:35,Threshold:35},[20,84]],["DistortionSoundEffect",170,{Level:35},[20,84]],["EchoSoundEffect",170,{Delay:35,DryLevel:35,Feedback:35,WetLevel:35},[20,84]],["EqualizerSoundEffect",170,{HighGain:35,LowGain:35,MidGain:35},[20,84]],["FlangeSoundEffect",170,{Depth:35,Mix:35,Rate:35},[20,84]],["PitchShiftSoundEffect",170,{Octave:35},[20,84]],["ReverbSoundEffect",170,{DecayTime:35,Density:35,Diffusion:35,DryLevel:35,WetLevel:35},[20,84]],["TremoloSoundEffect",170,{Depth:35,Duty:35,Frequency:35},[20,84]],["SoundGroup",{Volume:35},[20,85]],["Sparkles",{Enabled:2,SparkleColor:2},[30,42]],["StarterGear",,[30,20]],["StarterPlayerScripts",,[130,78]],["StarterCharacterScripts",183,,[130,78]],["Team",{AutoAssignable:2,AutoColorCharacters:2,Score:2,TeamColor:2},[10,24]],["TerrainRegion",{IsSmooth:2,SizeInCells:2},[20,65]],["TouchTransmitter",,[30,37]],["Trail",{Attachment0:2,Attachment1:2,Color:0,Enabled:52,FaceCamera:0,Lifetime:52,LightEmission:0,LightInfluence:0,MaxLength:52,MinLength:52,Texture:0,TextureLength:0,TextureMode:[],Transparency:0,WidthScale:52},[30,93]],["UIAspectRatioConstraint",{AspectRatio:1,AspectType:[1,49],DominantAxis:[1,50]},[30,26]],["UISizeConstraint",{MaxSize:1,MinSize:1},[30,26]],["UITextSizeConstraint",{MaxTextSize:1,MinTextSize:1},[30,26]],["UIGridStyleLayout",{AbsoluteContentSize:2,FillDirection:[1,51],HorizontalAlignment:[1,52],SortOrder:[1,53],VerticalAlignment:[1,54]}],["UIGridLayout",192,{CellPadding:0,CellSize:0,FillDirectionMaxCells:1,StartCorner:[1,55]},[30,26]],["UIListLayout",192,{Padding:0},[30,26]],["UIPageLayout",192,{Animated:0,Circular:0,CurrentPage:2,EasingDirection:[,56],EasingStyle:[,57],GamepadInputEnabled:54,Padding:0,ScrollWheelInputEnabled:54,TouchInputEnabled:54,TweenTime:0},[30,26]],["UITableLayout",192,{FillEmptySpaceColumns:0,FillEmptySpaceRows:0,MajorAxis:[1,58],Padding:0},[30,26]],["UIPadding",{PaddingBottom:1,PaddingLeft:1,PaddingRight:1,PaddingTop:1},[30,26]],["UIScale",{Scale:1},[30,26]],["ValueBase",,[30,4]],["BinaryStringValue",199],["BoolValue",199,{Value:2},[30,4]],["BrickColorValue",199,{Value:2},[30,4]],["CFrameValue",199,{Value:2},[30,4]],["Color3Value",199,{Value:2},[30,4]],["DoubleConstrainedValue",199,{MaxValue:2,MinValue:2,Value:2},[30,4]],["IntConstrainedValue",199,{MaxValue:2,MinValue:2,Value:2},[30,4]],["IntValue",199,{Value:2},[30,4]],["NumberValue",199,{Value:2},[30,4]],["ObjectValue",199,{Value:2},[30,4]],["RayValue",199,{Value:2},[30,4]],["StringValue",199,{Value:2},[30,4]],["Vector3Value",199,{Value:2},[30,4]],["WeldConstraint",{Active:1,Enabled:1,Part0:55,Part1:55},[30,94]]
		]
	}

	const BrickColors = {
		1:"White",2:"Grey",3:"Light yellow",5:"Brick yellow",6:"Light green (Mint)",9:"Light reddish violet",11:"Pastel Blue",12:"Light orange brown",18:"Nougat",21:"Bright red",22:"Med. reddish violet",23:"Bright blue",24:"Bright yellow",25:"Earth orange",26:"Black",27:"Dark grey",28:"Dark green",29:"Medium green",36:"Lig. Yellowich orange",37:"Bright green",38:"Dark orange",39:"Light bluish violet",40:"Transparent",41:"Tr. Red",42:"Tr. Lg blue",43:"Tr. Blue",44:"Tr. Yellow",45:"Light blue",47:"Tr. Flu. Reddish orange",48:"Tr. Green",49:"Tr. Flu. Green",50:"Phosph. White",100:"Light red",101:"Medium red",102:"Medium blue",103:"Light grey",104:"Bright violet",105:"Br. yellowish orange",106:"Bright orange",107:"Bright bluish green",108:"Earth yellow",110:"Bright bluish violet",111:"Tr. Brown",112:"Medium bluish violet",113:"Tr. Medi. reddish violet",115:"Med. yellowish green",116:"Med. bluish green",118:"Light bluish green",119:"Br. yellowish green",120:"Lig. yellowish green",121:"Med. yellowish orange",123:"Br. reddish orange",124:"Bright reddish violet",125:"Light orange",126:"Tr. Bright bluish violet",127:"Gold",128:"Dark nougat",131:"Silver",133:"Neon orange",134:"Neon green",135:"Sand blue",136:"Sand violet",137:"Medium orange",138:"Sand yellow",140:"Earth blue",141:"Earth green",143:"Tr. Flu. Blue",145:"Sand blue metallic",146:"Sand violet metallic",147:"Sand yellow metallic",148:"Dark grey metallic",149:"Black metallic",150:"Light grey metallic",151:"Sand green",153:"Sand red",154:"Dark red",157:"Tr. Flu. Yellow",158:"Tr. Flu. Red",168:"Gun metallic",176:"Red flip/flop",178:"Yellow flip/flop",179:"Silver flip/flop",180:"Curry",190:"Fire Yellow",191:"Flame yellowish orange",192:"Reddish brown",193:"Flame reddish orange",194:"Medium stone grey",195:"Royal blue",196:"Dark Royal blue",198:"Bright reddish lilac",199:"Dark stone grey",200:"Lemon metalic",208:"Light stone grey",209:"Dark Curry",210:"Faded green",211:"Turquoise",212:"Light Royal blue",213:"Medium Royal blue",216:"Rust",217:"Brown",218:"Reddish lilac",219:"Lilac",220:"Light lilac",221:"Bright purple",222:"Light purple",223:"Light pink",224:"Light brick yellow",225:"Warm yellowish orange",226:"Cool yellow",232:"Dove blue",268:"Medium lilac",301:"Slime green",302:"Smoky grey",303:"Dark blue",304:"Parsley green",305:"Steel blue",306:"Storm blue",307:"Lapis",308:"Dark indigo",309:"Sea green",310:"Shamrock",311:"Fossil",312:"Mulberry",313:"Forest green",314:"Cadet blue",315:"Electric blue",316:"Eggplant",317:"Moss",318:"Artichoke",319:"Sage green",320:"Ghost grey",321:"Lilac",322:"Plum",323:"Olivine",324:"Laurel green",325:"Quill grey",327:"Crimson",328:"Mint",329:"Baby blue",330:"Carnation pink",331:"Persimmon",332:"Maroon",333:"Gold",334:"Daisy orange",335:"Pearl",336:"Fog",337:"Salmon",338:"Terra Cotta",339:"Cocoa",340:"Wheat",341:"Buttermilk",342:"Mauve",343:"Sunrise",344:"Tawny",345:"Rust",346:"Cashmere",347:"Khaki",348:"Lily white",349:"Seashell",350:"Burgundy",351:"Cork",352:"Burlap",353:"Beige",354:"Oyster",355:"Pine Cone",356:"Fawn brown",357:"Hurricane grey",358:"Cloudy grey",359:"Linen",360:"Copper",361:"Dirt brown",362:"Bronze",363:"Flint",364:"Dark taupe",365:"Burnt Sienna",1001:"Institutional white",1002:"Mid gray",1003:"Really black",1004:"Really red",1005:"Deep orange",1006:"Alder",1007:"Dusty Rose",1008:"Olive",1009:"New Yeller",1010:"Really blue",1011:"Navy blue",1012:"Deep blue",1013:"Cyan",1014:"CGA brown",1015:"Magenta",1016:"Pink",1017:"Deep orange",1018:"Teal",1019:"Toothpaste",1020:"Lime green",1021:"Camo",1022:"Grime",1023:"Lavender",1024:"Pastel light blue",1025:"Pastel orange",1026:"Pastel violet",1027:"Pastel blue-green",1028:"Pastel green",1029:"Pastel yellow",1030:"Pastel brown",1031:"Royal purple",1032:"Hot pink"
	}
	
	const ZeroClassName = Data.Classes[0][0]
	let isPrepared = false
	const prepare = () => {
		if(isPrepared) { return }
		isPrepared = true

		const enums = Data.Enums
		const enumDict = Data.Enums = {}
		enums.forEach(([name, items]) => enumDict[name] = items)

		const classes = Data.Classes
		const classDict = Data.Classes = {}
		classes.forEach(([className, superClass, members, rmd]) => {
			if(typeof superClass !== "number") {
				rmd = members
				members = superClass
				superClass = null
			}

			superClass = classes[superClass || 0][0]
			superClass = className === superClass ? null : classDict[superClass]
			
			if(members) {
				Object.entries(members).forEach(([prop, value]) => {
					if(typeof value === "number") {
						members[prop] = {
							Group: value === -1 ? "HIDDEN" : Data.Categories[value]
						}
					} else {
						const [cat, enumType] = value
	
						members[prop] = {
							Group: cat === -1 ? "HIDDEN" : Data.Categories[cat || 0],
							Enum: enums[enumType || 0][1]
						}
					}
				})
			}

			classDict[className] = {
				Name: className,
				Superclass: superClass,
				Members: members,
				ExplorerOrder: typeof rmd === "number" ? rmd : rmd ? rmd[0] : undefined,
				ExplorerIcon: Array.isArray(rmd) ? rmd[1] : undefined
			}
		})
	}

	const getPropInfo = (className, prop) => {
		prepare()
		let target = Data.Classes[className] || Data.Classes[ZeroClassName]

		while(target) {
			if(target.Members) {
				const propInfo = target.Members[prop]
				if(propInfo) { return propInfo }
			}
			target = target.Superclass
		}

		return null
	}

	return {
		getEnum(name) {
			prepare()
			return Data.Enums[name]
		},
		getPropertyGroup(className, prop) {
			prepare()
			const propInfo = getPropInfo(className, prop)
			return propInfo ? propInfo.Group : IS_DEV_MODE ? "Unknown" : "Data"
		},
		getPropertyEnumName(className, prop, value) {
			prepare()
			const propInfo = getPropInfo(className, prop)
			return (propInfo && propInfo.Enum) ? propInfo.Enum[value] : null
		},
		getBrickColorName(value) {
			return BrickColors[value]
		},
		getExplorerIconIndex(className) {
			prepare()
			const data = Data.Classes[className]
			if(data && data.ExplorerIcon !== undefined) { return data.ExplorerIcon }
			return 0
		},
		getExplorerOrder(className) {
			prepare()
			const data = Data.Classes[className]
			if(data && data.ExplorerOrder !== undefined) { return data.ExplorerOrder }
			return -1
		}
	}
})()