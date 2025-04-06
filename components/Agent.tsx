import { cn } from '@/lib/utils';
import Image from 'next/image'

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const Agent = ({userName}: AgentProps) => {
    const isSpeaking = true;
    const callStatus = CallStatus.FINISHED;

  return (
    <>
    <div className='call-view'>
        <div className='card-interviewer'>
            <div className='avatar'>
                <Image src="/ai-avatar.png" alt="vapi" height={54} width={65} className='object-cover'/>
                {isSpeaking && <span className='animate-speak'/>}
            </div>
            <h3>AI Interviewer</h3>
        </div>
        <div className='card-border'>
            <div className='card-content'>
                <Image src = "/user-avatar.png" alt = "user avatar" height={540} width={540} className='rounded-full object-cover size-[120px]'/>
                <h3>{userName}</h3>
            </div>
        </div>
    </div>
    <div className='w-full flex justify-center'>
        {callStatus != 'ACTIVE' ? (
            <button className='relative btn-call'>
                <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' & 'hidden')}
                />
                <span>
                {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '. . .'}
                </span>
            </button>
        ): (
            <button className='btn-disconnect'>
                End
            </button>
        )}
    </div>
    </>
  )
}

export default Agent